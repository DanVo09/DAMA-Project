import React from 'react'
import PostsSideBar from '../components/posts/PostsSideBar'
import Singlepost from '../components/posts/SinglePost'

export default function Postsingle() {
    

    return (
        <div className='post-single-container'>
            <div className="banner" style={{background: `linear-gradient(rgba(255,255,255,0.6),
                rgba(2255,255,255,0.6) ), url("assets/images/profile-picture/background.jpg") center/cover no-repeat` }}>
                        <div className="header-banner">
                            <h2>Our Newsletter</h2>
                            <p>Stay informed about what is happening with the DAMA - Edmonton community</p>
                        </div>

            </div>
            <div className="post-single-wrapper">
                
                <Singlepost/>
            </div>
        </div>
    )
}
