
import React, {useEffect, useState}  from 'react'
import {Link, useNavigate } from 'react-router-dom';


export default function UserProfileCard() {

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

  const userId = Number(name.map(obj => obj.user_id))
  console.log(userId)

    const [userMembership, setUserMembershipData] = useState([]);
    useEffect(async ()=> {
        let result = await fetch(`http://dama.web.dmitcapstone.ca/api/user_membership?user_id=${userId}`);
        result =await result.json();
        setUserMembershipData(result);

    },[])


    console.log(userMembership)
    
    return (
      <>
       
         
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
                  <p>Membership type: {obj.membership_type}</p>
                  <p>Membership effective date {obj.effective_date}</p>
                  <p>Membership expiry date: {obj.expiry_date}</p>
                  <p></p>
                  
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
       
           
        </>
      );
}



