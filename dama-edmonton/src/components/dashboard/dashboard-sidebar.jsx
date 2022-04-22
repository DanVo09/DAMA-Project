import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';




export default function DashBoardSideBar() {

  const navigate = useNavigate();
  const [click, setClick] = useState(false);

  function toggleHamburger() {

    document.querySelector('.dashboard-sidebar').classList.toggle('show');
    return setClick(null)
  }

  
  function logOut(){
    localStorage.clear();
    navigate('/login')
}
    
    return (
      <>
      
          <div className='side-bar-button'>
            <button  onClick={toggleHamburger}>My Account</button>
            {click === null?  <KeyboardArrowUpIcon  className='arrow-btn-icon'/>  :  <KeyboardArrowDownIcon  className='arrow-btn-icon'/> }
           
          </div>
          
          <aside className='dashboard-sidebar'>
            <h2>My Account</h2>
            <Link to="/profile" className='sidebar-icon'><FolderSharedIcon className="upload-icon"/><p>Profile</p></Link>
            <Link to="/coursehistory" className='sidebar-icon'><BookOutlinedIcon className="courses-icon"/><p>Courses History</p></Link>
            <Link to="/eventhistory" className='sidebar-icon'><CalendarTodayIcon className="calendar-icon"/><p>Events History</p></Link>
            <Link to="/jobsboard" className='sidebar-icon'><WorkOutlineIcon className="job-icon"/><p>Job Postings</p></Link>
            <Link to="/changepassword" className='sidebar-icon'><LockOpenIcon className="courses-icon"/><p>Change Password</p></Link>
            <Link to="#" className='sidebar-icon'><ExitToAppIcon className="courses-icon"/><p onClick={logOut}>Sign-out</p></Link>
          </aside>
         
        </>
      );
}



