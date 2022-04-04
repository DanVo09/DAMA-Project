import React, {useState, useEffect} from 'react';
import EventData from './event-data';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

export default function EventList(){

    const [eventData, setEventData] = useState([]);
    useEffect(async ()=> {
        let result = await fetch("http://dama.web.dmitcapstone.ca/api/all_events");
        result =await result.json();
        setEventData(result);

    },[])

    console.log(eventData)
    
    const current = new Date();

    const upComingEventData = EventData.filter(obj=> new Date(obj.eventDate)  > current)

    const [events, setEvents] = useState(upComingEventData);
    const [pageNumber, setPageNumber] = useState(0);

    const eventPerPage = 3
    const pagesVisited = pageNumber*eventPerPage

    console.log(events)
   
    const displayEvents = events.slice(pagesVisited, pagesVisited + eventPerPage).map((obj) =>{
        return(                
            <div key={obj.id}  className="event-card">
                <div className="event-card-img-container">
                    <img className="event-card-img" src={process.env.PUBLIC_URL + `/assets/images/${obj.picture}`} alt="#" />
                </div>
                <div className="event-card-content">
                    <div className="card-content-wrapper">
                        <h2>{obj.title}</h2>
                        <h3>{obj.eventSpeaker}</h3>
                        <h4>{obj.eventDate}</h4>
                        <p>{obj.eventDetail}</p>
                        <Link to={`/events/${obj.id}`} >Learn More/Register</Link>
                    </div>
                </div>
            </div>

        )
    });
    const pageCount = Math.ceil(events.length / eventPerPage)
    const changePage = ({selected}) => {
        setPageNumber(selected);
    }
    
    return(
        <div className='event-list'>
            <h2>Upcoming Events</h2>
            <div className='event-flex'>
                {displayEvents}
            </div>
            <ReactPaginate 
                previousLable={"Previous"}
                nextLable={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBtn"}
                previousLinkClassName={"previousBtn"}
                nextLinkClassName={"nextBtn"}
                activeClassName={"paginationActive"}
                pageLinkClassName={"pageNumberBtn"}

            />
        </div>

    )
}