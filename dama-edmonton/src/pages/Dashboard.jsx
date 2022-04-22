
import React, {useEffect}  from 'react'
import {Link, useNavigate } from 'react-router-dom';
import FeedBackForm from '../components/feedbackForm/feedbackForm';
import CourseHistoryList from '../components/dashboard/coursehistoryList';
import UserProfileCard from '../components/dashboard/userprofilecard';
import DashBoardSideBar from '../components/dashboard/dashboard-sidebar';
export default function Dashboard() {

  const navigate = useNavigate();

  useEffect(()=>{
      if(!localStorage.getItem('user-info')){
          navigate("/login")
      }
  })

    return (
      <>
        <div className='dashboard-page'>
          <DashBoardSideBar/>
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



