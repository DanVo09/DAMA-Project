
import React from 'react'
import {Link} from 'react-router-dom';

import FeedBackForm from '../feedbackForm/feedbackForm';
import DashBoardSideBar from './dashboard-sidebar.jsx';


export default function CourseHistory() {
    
    return (
      <>
        <div className='dashboard-page'>
          <DashBoardSideBar/>
          <div className='dashboard-cards' id="profile">
         
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
           
          </div>
        </div>
        <FeedBackForm/>
        </>
      );
}



