
import React  from 'react'

import Posts from '../components/posts/Posts'
import PostsSideBar from '../components/posts/PostsSideBar'

export default function Newsletter() {

    
    
    return (
        <div className="news-container">
            <div className="banner" style={{background: `linear-gradient(rgba(255,255,255,0.6),
            rgba(2255,255,255,0.6) ), url("assets/images/profile-picture/background.jpg") center/cover no-repeat` }}>
                    <div className="header-banner">
                        <h2>Newsletter</h2>
                    </div>

            </div>
           <div className="news-wrapper">
                <h4> Stay up to date with whats happening in our DAMA - Edmonton community.</h4>
                <div className="news-content">
                    
                    <Posts/>
                </div>
           </div>
        </div>
    )
}



