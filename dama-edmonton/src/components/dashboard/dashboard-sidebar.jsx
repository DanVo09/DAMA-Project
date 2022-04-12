import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import React from 'react'
import {Link} from 'react-router-dom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';



export default function DashBoardSideBar() {
    
    return (
      <>
      
          <div className='side-bar-button'>
            <h2>My Account</h2>
            <KeyboardArrowUpIcon  className='arrow-btn-icon'/> 
          </div>
          
          <aside className='dashboard-sidebar'>
            <h2>My Account</h2>
            <Link to="/profile" className='sidebar-icon'><FolderSharedIcon className="upload-icon"/><p>Profile</p></Link>
            <Link to="/coursehistory" className='sidebar-icon'><BookOutlinedIcon className="courses-icon"/><p>Courses History</p></Link>
            <Link to="/eventhistory" className='sidebar-icon'><CalendarTodayIcon className="calendar-icon"/><p>Events History</p></Link>
            <Link to="/jobsboard" className='sidebar-icon'><WorkOutlineIcon className="job-icon"/><p>Job Postings</p></Link>
            <Link to="/changepassword" className='sidebar-icon'><LockOpenIcon className="courses-icon"/><p>Change Password</p></Link>
            <Link to="/jobsboard" className='sidebar-icon'><ExitToAppIcon className="courses-icon"/><p>Sign-out</p></Link>
          </aside>
         
        </>
      );
}



