import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Events from './dummyData'


export default function Eventcard() {
    
    const [events, setEvents] = useState([])

    return (
        <>  
            {Events.map((obj, id) => {
                 {console.log(obj)}
                return(
                    
                    <div key={obj.id}  className={obj === Events[0] ? "event-card feature" : "event-card"}>
                        <div className="event-card-img-container">
                            <img className="event-card-img" src={process.env.PUBLIC_URL + `/assets/images/${obj.eventPicture}`} alt="#" />
                        </div>
                        <div className="event-card-content">
                            <h2>{obj.eventTitle}</h2>
                            <h3>{obj.eventSpeaker}</h3>
                            <h4>{obj.eventDate}</h4>
                            <p>{obj.eventDetail}</p>
                            <Link to="/events">Learn More/Register</Link>
                        </div>
                    </div>

                )
            })}
        </>
    )
}
