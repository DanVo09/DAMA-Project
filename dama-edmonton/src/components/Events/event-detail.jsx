import React, { useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import EventSideBar from './event-sidebar';
import EventData from './event-data';
import EventSearchBar from '../searchBar/event-searchBar';

export default function EventDetail() {
    const {id} = useParams();
    console.log(id);
    const selectedEvents = EventData.filter(obj => obj.id === id);
    console.log(selectedEvents);


    

    return (
         
        <div className="event-detail-page-wrapper">
            <EventSearchBar/>
           
            <div className='main-container'>
                <EventSideBar/>
                
                {selectedEvents.map((obj, id) => {
                    
                    return(
                        
                        <div key={obj.id}  className="event-content">
                            <div className="event-card-img-container">
                                <img className="event-card-img" src={process.env.PUBLIC_URL + `/assets/images/${obj.eventPicture}`} alt="#" />
                            </div>
                            <div className="event-content-detail">
                                <div className="card-content-wrapper">
                                    <h2>{obj.eventTitle}</h2>
                                    <h3>{obj.eventSpeaker}</h3>
                                    <p>{obj.eventDate}</p>
                                    <p>{obj.eventDetail}</p>
                                    <Link to="#">Register</Link>
                                </div>
                            </div>
                        </div>

                    )
                })}

               
            </div>
           
        </div> 
        
    )
}
