import React, { useState, useEffect, useContext} from 'react';
import { Link, useParams } from 'react-router-dom';
import EventSideBar from './event-sidebar';
import EventData from './event-data';
import EventSearchBar from './event-searchbar';
import FeedBackForm from '../feedbackForm/feedbackForm';
import CartContext from '../../context/cart/CartContext';



export default function EventDetail({obj}) {
    const {id} = useParams();
    console.log(id);
    const selectedEvents = EventData.filter(obj => obj.id === id);
    console.log(selectedEvents);
    const { addCartToStorage } = useContext(CartContext)


    

    return (
         
        <div className="event-detail-page-wrapper">
            <EventSearchBar/>
           
            <div className='main-container'>
                <EventSideBar/>
                
                {selectedEvents.map((obj, id) => {
                    
                    return(
                        
                        <div key={obj.id}  className="event-content">
                            <div className="event-card-img-container">
                                <img className="event-card-img" src={process.env.PUBLIC_URL + `/assets/images/${obj.picture}`} alt="#" />
                            </div>
                            <div className="event-content-detail">
                                <div className="card-content-wrapper">
                                    <h2>{obj.iitle}</h2>
                                    <h3>{obj.eventSpeaker}</h3>
                                    <p>{obj.eventDate}</p>
                                    <p>{obj.eventDetail}</p>
                                    <Link to="#" onClick={ () => addCartToStorage(obj)}>Register</Link>
                                </div>
                            </div>
                        </div>

                    )
                })}
               
            </div>
            <FeedBackForm/>
           
        </div> 
        
    )
}
