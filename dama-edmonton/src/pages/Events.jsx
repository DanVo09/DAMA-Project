
import React from 'react'
import EventList from '../components/Events/Events-list';
import EventSideBar from '../components/Events/event-sidebar';
import EventSearchBar from '../components/searchBar/event-searchBar';

export default function EventPages() {
    
    return (
        <>
        <div className='event-page-wrapper'>
            <div className='course-banner' style={{background: ` url("assets/images/profile-picture/background.jpg") center/cover no-repeat` }}>
                <h1>EVENTS - PAST AND PRESENT</h1>
            </div>
            <EventSearchBar/>

            <div className='main-content'>
               <EventSideBar/>
                <EventList/>
            </div>
        
        </div>  
        </>
    )
}



