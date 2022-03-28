import React, {useState} from "react";
import { Link } from "react-router-dom";
import EventData from "./event-data";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import './event-sidebar.css';


export default function EventSideBar(){
 
    const [click, setClick] = useState("");

    const handleClick = () => {
        setClick(!click);    
   
    }
  

    return (
        <div className='sidebar'>
                    <div className='upcoming-event'>
                        <div className='main-title'>
                            <h2>Upcoming Events</h2>
                        </div>
                         
                        <>  
            {EventData.map(obj => {
                return(
                    
                    <div key={obj.id}  className= "event-detail">

                            <div className='title'>
                                <h3>{obj.eventSpeaker}</h3>
                                <div onClick={handleClick}>
                                    {
                                        click?
                                        <RemoveIcon classname="remove-icon"/>
                                       
                                        :
                                        <AddIcon classname="remove-icon"/>
                                        
                                    }
                                   
                                </div>
                                
                            </div>
                            <div className="topic-content">
                                            <p>Topic: {obj.eventTitle}</p>
                                            <p>Time: {obj.eventDate}</p>
                                            <Link to={`/events/${obj.id}`} >More infor</Link>
                                        </div>
                            
                            
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
        
    )
}