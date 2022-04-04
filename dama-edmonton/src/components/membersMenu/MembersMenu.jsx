import React, {useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import UserData from './User'

export default function MembersMenu({obj}) {

    const {id} = useParams();
    const user = UserData.filter(obj => obj.id === id);
    console.log(user)

    return (
        <>

            {user.map((obj, id) => {

                return (
                    <ul key={obj.id} className="membersMenu">
                        <li>
                            <Link to="/dashboard" className='dashboardLink'><img src={process.env.PUBLIC_URL + `/assets/images/${obj.picture}`} alt="#" className='dashboardImage' />{obj.firstname} {obj.lastname}</Link>
                        </li>
                        {/* <li>
                            <Link to="/jobsboard">Jobs Board</Link>
                        </li> */}
                    </ul>
                )

            })}

           
        </>
    )
}
