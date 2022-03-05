import React from 'react'
import { Link } from 'react-router-dom'

export default function Eventcard() {
    

    return (
        <>
            <div className="event-card">
                <div className="event-card-img-container">
                    <img className="event-card-img" src={process.env.PUBLIC_URL + `/assets/images/events/1.jpg`} alt="#" />
                </div>
                <div className="event-card-content">
                    <h2>Conference: Data Security in 2022</h2>
                    <h3>Jon Snow</h3>
                    <h4>May 17th 2022</h4>
                    <p>Niche market business model
                    canvas paradigm shift stock.
                    Pitch accelerator gen-z
                    business model canvas twitter
                    burn rate.</p>
                    <Link to="#">Learn More/Register</Link>
                </div>
            </div> 
        </>
    )
}
