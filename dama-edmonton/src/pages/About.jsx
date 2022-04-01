import React from 'react';
import {Link} from 'react-router-dom';
import LogoSlideShow from '../components/logoSlideShow/logoSlideShow';
import GoalMission from '../components/about-components/GoalMission/GoalMission';
import ThoughtLeader from '../components/about-components/ThoughtLeaders/ThoughtLeader';


export default function Aboutus() {
    

    return (
      
        <>
          <div className="about-page-wrapper">
            <div className="banner" style={{background: `linear-gradient(rgba(255,255,255,0.6),
            rgba(2255,255,255,0.6) ), url("assets/images/profile-picture/background.jpg") top/cover no-repeat` }}>
                    <div className="about-title">
                        <h2>Edmonton Data management Association</h2>
                        <p>Business Analytics, Data Analytics, Internet of Things Analytics, Data Science, Data Management, Data Governance, Data Operations and Security, Data Stewardship, Data Modeling.</p>
                        <Link className="navItem" to="/memberships" onClick="window.location.reload();">Request information via Email</Link>  
                    </div>
                    <div className="MissonGoal">
                        <GoalMission/>
                    </div>

                </div> 
                <section className="person-profile">
                    <h2>DAMA Edmonton Board of Directors</h2>
                    <div className="person-profile-flex">
                        <div className="person-profile-details">
                            <Link className="navItem" to="/memberships" onClick="window.location.reload();">
                                <h3>President</h3>
                                <img src="assets/images/profile-picture/example1.jpg" alt="images"/>
                                <h4>Stephen Kaiser</h4>
                                <p>Servus - Director Member and Market Insights</p>
                            </Link>
                        </div>
                        <div className="person-profile-details">
                            <Link className="navItem" to="/memberships" onClick="window.location.reload();">
                                <h3>Past President</h3>
                                <img src="assets/images/profile-picture/example1.jpg" alt="images"/>
                                <h4>Kewal Dhariwal</h4>
                                <p>ICCP - Executive Director</p>
                            </Link>
                        </div>
                    </div>

                    <div className="person-profile">
                        <h3>Vice President</h3>
                        <div className="person-profile-flex">
                            <div className="person-profile-details">
                                <Link className="navItem" to="/memberships" onClick="window.location.reload();">
                                    <img src="assets/images/profile-picture/example1.jpg" alt="images"/>
                                    <h4>Bob Hiew</h4>
                                    <p>Vice President Business Development</p>
                                    <p>BH Enterprises - Founder</p>
                                    
                                </Link>
                            </div>
                            <div className="person-profile-details">
                                <Link className="navItem" to="/memberships" onClick="window.location.reload();">
                                    <img src="assets/images/profile-picture/example1.jpg" alt="images"/>
                                    <h4>Surinder Padem</h4>
                                    <p>Vice President Marketing and Logistics</p>
                                    <p>NAIT-CTC - Program Manager</p>
                                    
                                </Link>
                            </div>
                            <div className="person-profile-details">
                                <Link className="navItem" to="/memberships" onClick="window.location.reload();">
                                    <img src="assets/images/profile-picture/example1.jpg" alt="images"/>
                                    <h4>Eric Dressler</h4>
                                    <p>Vice President  Data Science Initiatives</p>
                                    <p>Alberta Motor Association - Director Data Analytics</p>
                                
                                </Link>
                            </div>
                            <div className="person-profile-details">
                                <Link className="navItem" to="/memberships" onClick="window.location.reload();">
                                    <img src="assets/images/profile-picture/example1.jpg" alt="images"/>
                                    <h4>Dan Haight</h4>
                                    <p>Vice President Education and Standards</p>
                                    <p>Darkhorse Analytics - Founder/President</p>
                                
                                </Link>
                            </div>
                            <div className="person-profile-details">
                                <Link className="navItem" to="/memberships" onClick="window.location.reload();">
                                    <img src="assets/images/profile-picture/example1.jpg" alt="images"/>
                                    <h4>Terri Howald</h4>
                                    <p>Vice President Membership</p>
                                    <p>Data Architect</p>
                                    
                                </Link>
                            </div>

                        </div>
                    
                    </div>

                </section>
                <section className="person-profile">
                    <h3>Data Management - Data Science - Thought Leaders</h3>
                
                    <div className="person-profile-flex">
                        <ThoughtLeader/>
                    </div>
                
                </section>
            
            <section className="sponsors-section">
                <h2>Partners and Sponsors</h2>
                <div className="logo-flex">
                <LogoSlideShow/> 
                </div>
            </section>
          </div>
        </>
    )
}



