
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Events from '../components/eventCard/dummyData';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RemoveIcon from '@mui/icons-material/Remove';

import FeedBackForm from '../components/feedbackForm/feedbackForm';
import EventSideBar from '../components/event-side-bar/event-sidebar';

export default function EventPages() {

    const [events, setEvents] = useState([])
    
    return (
        <>
        <div className='event-page-wrapper'>
            <div className='course-banner' style={{background: `linear-gradient(rgba(255,255,255,0.6),
                rgba(2255,255,255,0.6) ), url("assets/images/profile-picture/background.jpg") top/cover no-repeat` }}>
                <h1>EVENTS - PAST AND PRESENT</h1>
            </div>
            <div className='search-form'>

                <button>Events</button>
                <input type="text" name="search-bar" />
                <input type="submit" name="search-submit" id="search-submit" />
                
            </div>
            <div className='main-content'>
                <div className='sidebar'>
                    <div className='upcoming-event'>
                        <div className='main-title'>
                            <h2>Upcoming Events</h2>
                            <ArrowDropDownIcon classname="arrowdown-icon"/>
                        </div>
                         <EventSideBar/>
                        <div className='detail-btn'>
                            <a href="#">More</a>

                        </div>
                       
                    </div>

                    <div  className='past-event'>
                        <div className='main-title'>
                            <h2>Past events</h2>
                            <ArrowDropDownIcon classname="arrowdown-icon"/>
                        </div>
                        <div className='event-detail'>
                            <div className='title'>
                                <h3>Amelia Estwick</h3>
                                <RemoveIcon classname="remove-icon"/>
                            </div>
                            <div className='topic-content'>
                               <p>Topic: How to talk to the business side about ML</p>
                               <p>Time: 5:00 p.m April 21, 2022</p>
                                <a href="#">Presentation Slide</a>
                                <a href="#">document.PDF</a>
                            </div>
                            
                        </div>
                        <div className='event-detail'>
                            <div className='title'>
                                <h3>Joseph Paul</h3>
                                <RemoveIcon classname="remove-icon"/>
                            </div>
                            <div className='topic-content'>
                               <p>Topic: How to talk to the business side about ML</p>
                               <p>Time: 5:00 p.m April 21, 2022</p>
                               <a href="#">Presentation Slide</a>
                                <a href="#">document.PDF</a>
                            </div>
                            
                        </div>
                        <div className='event-detail'>
                            <div className='title'>
                                <h3>William Inmon</h3>
                                <RemoveIcon classname="remove-icon"/>
                            </div>
                            <div className='topic-content'>
                               <p>Topic: How to talk to the business side about ML</p>
                               <p>Time: 5:00 p.m April 21, 2022</p>
                               <a href="#">Presentation Slide</a>
                                <a href="#">document.PDF</a>
                            </div>
                            
                        </div>
                        <div className='event-detail'>
                            <div className='title'>
                                <h3>Karen Parker</h3>
                                <RemoveIcon classname="remove-icon"/>
                            </div>
                            <div className='topic-content'>
                               <p>Topic: How to talk to the business side about ML</p>
                               <p>Time: 5:00 p.m April 21, 2022</p>
                               <a href="#">Presentation Slide</a>
                                <a href="#">document.PDF</a>
                            </div>
                            
                        </div>
                        <div className='detail-btn'>
                            <a href="#">More</a>

                        </div>
                       
                    </div>

                </div>

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



