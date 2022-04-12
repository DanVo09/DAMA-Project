
import React, {useEffect, useState}  from 'react'
import {Link, useNavigate } from 'react-router-dom';
import FeedBackForm from '../feedbackForm/feedbackForm';
import DashBoardSideBar from './dashboard-sidebar';


export default function Profile() {

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
         <DashBoardSideBar/>
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
                  <div key={obj.ser_membership_id}>
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
          </div>
        </div>
        <FeedBackForm/>
        </>
      );
}



