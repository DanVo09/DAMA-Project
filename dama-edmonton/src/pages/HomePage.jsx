import React from 'react'
import {Link} from 'react-router-dom'

// material ui icons

import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import ComputerIcon from '@mui/icons-material/Computer';
import StorageIcon from '@mui/icons-material/Storage';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

// components

import Carousel from '../components/carousel/Carousel'

export default function HomePage() {

    return (

        <>
           
           <div className="home-page-container">
           
               <Carousel />
               <div className="homepage-wrapper">

                {/* Newsletter Section */}

                  <section>

                  </section>

                {/*Education Section Content */}

                  <section className="education-section">
                     <div className="section-header">
                         <h2>Expand Your Knowledge</h2>
                         <h3>Reliable Data Managment Practices</h3>
                         <p>DAMA Edmonton is dedicated to advancing the concepts and practices of information and data management by supporting members and their organizations to address their information and data management needs.</p>
                     </div> 

                      {/* Courses Card */}

                     <div className="course-info-card">
                         <div className="card-title-content">
                             <h2>Learn Online</h2>
                             <p>Learning curve return on investment venture marketing equity user experience responsive web design conversion bandwidth freemium ramen business model canvas lean startup. Branding pivot scrum project leverage direct mailing startup infographic.</p>
                         </div>
                         <div className="card-sub-container">
                            <div className="icon-container">
                                <ComputerIcon className="course-icon"/>
                            </div>
                            <div className="content-container">
                                <h4>Self Directed</h4>
                                <p>Learning curve return on investment venture marketing equity user experience responsive web design conversion bandwidth freemium ramen business model canvas lean startup</p>
                                <Link to="#">Learn More &#62;</Link>
                            </div>
                         </div>
                         <div className="card-sub-container">
                            <div className="icon-container">
                                <CastForEducationIcon className="course-icon"/>
                            </div>
                            <div className="content-container">
                                <h4>Instructor Lead</h4>
                                <p>Learning curve return on investment venture marketing equity user experience responsive web design conversion bandwidth freemium ramen business model canvas lean startup</p>
                                <Link to="#">Learn More &#62;</Link>
                            </div>
                         </div>
                     </div>

                    {/* Enroll Card */}

                     <div className="enroll-today-card">
                         <StorageIcon className='storage-icon'/>
                         <PeopleAltIcon className='people-icon' />
                         <div className="enroll-content">
                            <h2>Enroll Today!</h2>
                            <p>Learning curve return on investment venture marketing equity user experience responsive web design conversion bandwidth freemium ramen business model canvas lean startup</p>
                            <Link to="/courses" className='enroll-btn'>Enroll</Link>
                         </div>
                     </div>

                     {/* NAIT Card */}

                     <aside className="nait-con-ed-card">
                         <img className='nait-logo' src={process.env.PUBLIC_URL + `/assets/images/NAIT-logo.png`} alt="nait logo" />
                        <div className="nait-content">
                            <h3>Continuing Education at NAIT - DATA Science</h3>
                            <p> This program is targeted for people with beginners in Data Science and teaches data analysis, data visualization, data mining, and machine learning. Primarily using Python</p>
                            <a href="https://www.nait.ca/coned/data-science" target="_blank">Learn More &#62;</a>
                        </div>
                     </aside>
                  </section>

                   {/* Events Section */}

                  <section className='events-section'>
                    <div className="section-header">
                        <h2>Upcoming Events</h2>
                        <h3>Reliable Data Managment Practices</h3>
                        <p>DAMA Edmonton is dedicated to advancing the concepts and practices of information and data management by supporting members and their organizations to address their information and data management needs.</p>
                    </div> 
                  </section>

                  {/* logo carousel component goes here */}

               </div>
           </div>   
        </>
    )
}



