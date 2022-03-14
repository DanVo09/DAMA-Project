
import React  from 'react'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RemoveIcon from '@mui/icons-material/Remove';
import Eventcard from '../components/eventCard/EventCard';
import FeedBackForm from '../components/feedbackForm/feedbackForm';

export default function Events() {

    
    
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
                        <div className='event-detail'>
                            <div className='title'>
                                <h3>Amelia Estwick</h3>
                                <RemoveIcon classname="remove-icon"/>
                            </div>
                            <div className='topic-content'>
                               <p>Topic: How to talk to the business side about ML</p>
                               <p>Time: 5:00 p.m April 21, 2022</p>
                                <a href="#">More infor</a>
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
                                <a href="#">More infor</a>
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
                                <a href="#">More infor</a>
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
                                <a href="#">More infor</a>
                            </div>
                            
                        </div>
                        <div className='event-detail'>
                            <a href="#">More</a>

                        </div>
                       
                    </div>

                    <div  className='main-title'>
                        <div>
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
                        <div className='event-detail'>
                            <a href="#">More</a>

                        </div>
                       
                    </div>

                </div>

                <div className='event-list'>
                    <h2>Upcoming Events</h2>
                    <div className='event-flex'>
                        <Eventcard/>

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



