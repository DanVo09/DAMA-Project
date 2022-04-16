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


export default function Dashboard() {

  const navigate = useNavigate();

  useEffect(()=>{
      if(!localStorage.getItem('user-info')){
          navigate("/login")
      }
  })

  const [name, setName] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("user-info");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const userId = name.map(obj => obj.user_id)
  console.log(userId)

  const [membership, setMembershipData] = useState([]);
    useEffect(async ()=> {
        let result = await fetch("http://dama.web.dmitcapstone.ca/api/all_members");
        result =await result.json();
        setMembershipData(result);

    },[])

    const userMembership = membership.filter(obj => obj.user_id === 35)

    console.log(userMembership)
    
    return (
      <>
        <div className='dashboard-page'>
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
          <div className='dashboard-cards' id="profile">
          <section  className='user-profile'>
            {name.map((obj, user_id) => {
                return (
                  <>
                    <div key={obj.user_id}>
                    <img src="/assets/images/profile-picture/example1.jpg" alt="images"/>
                    <h2>{obj.first_name} {obj.last_name}</h2>
                    <p>Email: {obj.email}</p>
                    </div>
                  </>
                )
              })}
              {userMembership.map((obj, user_membership_id) => {
                return (
                  < >
                  <div key={obj.user_membership_id}>
                  <p>Membership expiry date: {obj.expiry_date}</p> 
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatem autem eum aspernatur corrupti est iusto consectetur at in. Iusto consequuntur earum, sapiente distinctio accusantium commodi facere impedit expedita adipisci?</p>
                  </div>
                    
                  </>
                )
              })}

              {name.map((obj, user_id) => {
                return (
                  <>
                  <div key={obj.user_id} className='edit-btn'>
                    <Link to={`/dashboard/${obj.user_id}`}>Edit profile</Link>
                  </div>
                     
                  </>
                )
              })}
              
            </section>
            <section className='user-courses'>
              <div>
              <h3>Courses History</h3>
               <table>
                  <tr>
                    <th>Course Id</th>
                    <th>Course Name</th>
                    <th>Status</th>
                    <th>Date Start</th>
                    <th>Date End</th>
                  </tr>
                  <tr>
                    <td>123445</td>
                    <td><Link to="#">Introduction to Witchcraft</Link></td>
                    <td>Completed</td>
                    <td>2020-02-11</td>
                    <td>2022-04-11</td>
                  </tr>
                  <tr>
                    <td>1234</td>
                    <td><Link to="#">Introduction to Witchcraft</Link></td>
                    <td>Completed</td>
                    <td>2020-02-11</td>
                    <td>2022-04-11</td>
                  </tr>
                </table>
                <div className='course-history-list'>
                  <div className='course-history-detail'>
                        <div>
                          <p>Course ID:</p>
                          <p>1234</p>
                        </div>
                        <div>
                          <p>Course Name:</p>
                          <p> <Link to="#">Introduction to Witchcraft</Link> </p>
                        </div>
                        <div>
                          <p>Status:</p>
                          <p>Completed</p>
                        </div>
                        <div>
                          <p>Date Start:</p>
                          <p>2020-02-11</p>
                        </div>
                        <div>
                          <p>Date End:</p>
                          <p>2022-04-11</p>
                        </div>
                  </div>

                </div>
              </div>
            </section>
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



