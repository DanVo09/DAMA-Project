import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import React, {useEffect, useState}  from 'react'
import {Link, useNavigate } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FeedBackForm from '../components/feedbackForm/feedbackForm';
import CourseHistoryList from '../components/dashboard/coursehistoryList';
import UserProfileCard from '../components/dashboard/userprofilecard';
export default function Dashboard() {

  const navigate = useNavigate();

  useEffect(()=>{
      if(!localStorage.getItem('user-info')){
          navigate("/login")
      }
  })

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
        <div className='dashboard-page'>
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
            <Link to="/jobsboard" className='sidebar-icon'><ExitToAppIcon className="courses-icon"/><p onClick={logOut}>Sign-out</p></Link>
          </aside>
          <div className='dashboard-cards' id="profile">
            <UserProfileCard/>
            <CourseHistoryList/>
            <section className='user-courses'>
              <div>
              <h3>Events History</h3>
               <table>
                  <tr>
                    <th>Event ID</th>
                    <th>Event Name</th>
                    <th>Status</th>
                    <th>Time</th>
                    <th>Price</th>
                  </tr>
                  <tr>
                    <td>123445</td>
                    <td><Link to="#">Introduction to Witchcraft</Link></td>
                    <td>Completed</td>
                    <td>2020-02-11</td>
                    <td>$20</td>
                  </tr>
                  <tr>
                    <td>1234</td>
                    <td><Link to="#">Introduction to Witchcraft</Link></td>
                    <td>Completed</td>
                    <td>2020-02-11</td>
                    <td>$10</td>
                  </tr>
                </table>
                <div className='course-history-list'>
                  <div className='course-history-detail'>
                        <div>
                          <p>Event ID:</p>
                          <p>1234</p>
                        </div>
                        <div>
                          <p>Event Name:</p>
                          <p> <Link to="#">Introduction to Witchcraft</Link> </p>
                        </div>
                        <div>
                          <p>Status:</p>
                          <p>Completed</p>
                        </div>
                        <div>
                          <p>Time:</p>
                          <p>2020-02-11</p>
                        </div>
                        <div>
                          <p>Price:</p>
                          <p>2022-04-11</p>
                        </div>
                  </div>

                </div>
              </div>
            </section>
          </div>
        </div>
        <FeedBackForm/>
        </>
      );
}



