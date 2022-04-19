
import React from 'react'
import {Link} from 'react-router-dom';
import CourseHistoryList from './coursehistoryList';
import FeedBackForm from '../feedbackForm/feedbackForm';
import DashBoardSideBar from './dashboard-sidebar.jsx';


export default function CourseHistory() {
    
    return (
      <>
        <div className='dashboard-page'>
          <DashBoardSideBar/>
          <div className='dashboard-cards' id="profile">
         
           <CourseHistoryList/>
           
          </div>
        </div>
        <FeedBackForm/>
        </>
      );
}



