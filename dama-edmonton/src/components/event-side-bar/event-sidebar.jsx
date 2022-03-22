import React, {useState} from "react";
import { Link } from "react-router-dom";
import Events from "../eventCard/dummyData";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export default function EventSideBar(){
 
    const [click, setClick] = useState("");

    const handleClick = () => {
        setClick(!click);
       
           
           
   
    }
  

    return (
        <>  
            {Events.map(obj => {
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
                                <Link to="/events">More infor</Link>
                            </div>
                    </div>

                )
            })}
        </>
    )
}