import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import Events from './dummyData'


export default function Eventcard() {
    
    const [events, setEvents] = useState([])

    const [eventData, setEventData] = useState([]);
    useEffect(async ()=> {
        let result = await fetch("http://dama.web.dmitcapstone.ca/api/all_events");
        result =await result.json();
        setEventData(result);

    },[])

    const current = new Date();

    const upComingEventData = eventData.filter(obj=> new Date(obj.event_date)  >= current)

    console.log(upComingEventData)

    return (
        <>  
            {upComingEventData.map((obj, id) => {
                 
                return(
                    
                    <div key={obj.event_id}  className={obj === upComingEventData[0] ? "event-card feature" : "event-card non-feature"}>
                        <div className="event-card-img-container">
                            <img className="event-card-img" src={process.env.PUBLIC_URL + `/assets/images/events/2.jpg`} alt="#" />
                        </div>
                        <div className="event-card-content">
                            <div className="card-content-wrapper">
                                <h2>{obj.event_title}</h2>
                                <h3>Speaker</h3>
                                <h4>{obj.event_date}</h4>
                                <p className='event-desc'>{obj.event_description}</p>
                                <Link to={`/events/${obj.event_id}`} >Learn More/Register</Link>
                            </div>
                        </div>
                    </div>

                )
            })}
        </>
    )
}
