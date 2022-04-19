
import React, {useEffect}  from 'react'
import { useNavigate } from 'react-router-dom';
import FeedBackForm from '../feedbackForm/feedbackForm';
import DashBoardSideBar from './dashboard-sidebar';
import UserProfileCard from './userprofilecard';

export default function Profile() {

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
          </div>
        </div>
        <FeedBackForm/>
        </>
      );
}



