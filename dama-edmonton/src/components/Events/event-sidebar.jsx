import React, {useState} from "react";
import { Link } from "react-router-dom";
import EventData from "./event-data";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import './event-sidebar.css';


export default function EventSideBar(){

    const current = new Date();

    const upComingEventData = EventData.filter(obj=> new Date(obj.eventDate)  > current)
    const PastEventData = EventData.filter(obj=> new Date(obj.eventDate)  < current)
 
    const [click, setClick] = useState(false);
    const toggle = index => {
        if(click === index) {
            return setClick(null)
        }

        setClick(index)
    }

    const [pastClick, setPastClick] = useState(false);
    const pastEventToggle = index => {
        if(pastClick === index) {
            return setPastClick(null)
        }

        setPastClick(index)
    }
  

    return (
        <div className='sidebar'>
            <div className='upcoming-event'>
                <div className='main-title'>
                    <h2>Upcoming Events</h2>
                </div>
                         
                <>  
                {upComingEventData.map((obj, index )=> {
                    return(
                        
                        <div key={obj.id}  className="event-detail">

                                <div className='title'>
                                    <h3>{obj.eventSpeaker}</h3>
                                    <div onClick={() => toggle(index)} key={index}>
                                        {click === index?
                                            <RemoveIcon className="remove-icon"/>
                                        
                                            :
                                            <AddIcon className="remove-icon"/>}
                                    </div>
                                </div>
                                {click === index?
                                    <div className="topic-content">
                                        <p>Topic: {obj.title}</p>
                                        <p>Date: {obj.eventDate}</p>
                                        <p>Time: {obj.eventTime}</p>
                                        <Link to={`/events/${obj.id}`} >More infor</Link>
                                    </div>
                                    :
                                    null
                                } 
                        </div>

                    )
                })}
                </>
                <div className='detail-btn'>
                    <a href="#">More</a>
                </div>
                       
            </div>

            <div  className='past-event'>
                <div className='main-title'>
                    <h2>Past events</h2>
                </div>
                <>  
                {PastEventData.map((obj, index )=> {
                    return(
                        
                        <div key={obj.id}  className= "event-detail">

                                <div className='title'>
                                    <h3>{obj.eventSpeaker}</h3>
                                    <div onClick={() => pastEventToggle(index)} key={index}>
                                        {pastClick === index?
                                            <RemoveIcon className="remove-icon"/>
                                        
                                            :
                                            <AddIcon className="remove-icon"/>}
                                    </div>
                                </div>
                                {pastClick === index?
                                    <div className="topic-content">
                                        <p>Topic: {obj.title}</p>
                                        <p>Date: {obj.eventDate}</p>
                                        <p>Time: {obj.eventTime}</p>
                                        <Link to={`/events/${obj.id}`} >More infor</Link>
                                    </div>
                                    :
                                    null
                                } 
                        </div>

                    )
                })}
                </>
            </div>
        </div>
    )
}