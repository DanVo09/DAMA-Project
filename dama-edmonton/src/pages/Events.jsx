
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Events from '../components/eventCard/dummyData';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RemoveIcon from '@mui/icons-material/Remove';

import FeedBackForm from '../components/feedbackForm/feedbackForm';
import EventSideBar from '../components/Events/event-sidebar';
import EventSearchBar from '../components/Events/event-searchbar';

export default function EventPages() {

    const [events, setEvents] = useState([])
    
    return (
        <>
        <div className='event-page-wrapper'>
            <div className='course-banner' style={{background: `linear-gradient(rgba(255,255,255,0.6),
                rgba(2255,255,255,0.6) ), url("assets/images/profile-picture/background.jpg") top/cover no-repeat` }}>
                <h1>EVENTS - PAST AND PRESENT</h1>
            </div>
            <EventSearchBar/>
            <div className='main-content'>
                <EventSideBar/>

                <div className='event-list'>
                    <h2>Upcoming Events</h2>
                    <div className='event-flex'>
                    {Events.map((obj, id) => {
                 
                        return(
                            
                            <div key={obj.id}  className="event-card">
                                <div className="event-card-img-container">
                                    <img className="event-card-img" src={process.env.PUBLIC_URL + `/assets/images/${obj.eventPicture}`} alt="#" />
                                </div>
                                <div className="event-card-content">
                                    <div className="card-content-wrapper">
                                        <h2>{obj.eventTitle}</h2>
                                        <h3>{obj.eventSpeaker}</h3>
                                        <h4>{obj.eventDate}</h4>
                                        <p>{obj.eventDetail}</p>
                                        <Link to="/events">Learn More/Register</Link>
                                    </div>
                                </div>
                            </div>
        
                        )
                    })}

                    </div>

                </div>

            </div>
            <div className='feedback'>
                <FeedBackForm/>
            </div>
        
        </div>  
        </>
    )
}



