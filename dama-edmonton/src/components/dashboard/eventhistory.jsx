
import React from 'react'
import {Link } from 'react-router-dom';
import FeedBackForm from '../feedbackForm/feedbackForm';
import DashBoardSideBar from './dashboard-sidebar';


export default function EventHistory() {
    
    return (
      <>
        <div className='dashboard-page'>
         <DashBoardSideBar/>
          <div className='dashboard-cards' id="profile">
         
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



