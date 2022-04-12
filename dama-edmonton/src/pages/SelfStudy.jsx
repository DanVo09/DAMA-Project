import React from "react";
import SearchBar from '../components/searchBar/searchBar';
import CourseSideBar from '../components/courses/course-sidebar';
import FeedBackForm from "../components/feedbackForm/feedbackForm";
import CertificatinInfo from "../components/courses/certification-info";

export default function SelfStudy() {
    return(
        <div className="selfstudy-page-wrapper">
            <div className='selfstudy-banner' style={{background: ` url("assets/images/profile-picture/background.jpg") center/cover no-repeat` }}>
                <h1>TRAINING, EDUCATION, CERTIFICATION</h1>
            </div>
            <SearchBar/>
            <div className='main-container'>
                <CourseSideBar />
                <div className="content-detail">
                    <h2>Self Study Courses</h2>
                    <p>Self Paced, Self-Study with email learner support (for 6 weeks)</p>
                    <p>Each module has a pre-test and post-test quizzes, module questions for weekly work and a weekly study guide</p>
                    <p>Tuition:  $595</p>
                    <div>
                        <h3>Time</h3>
                        <p>​Self Study Courses: Start any time, finish any time.</p>
                        <p>Ideal for experienced Data Professionals</p>
                    </div>
                    <div>
                        <h3>How to Register</h3>
                        <p>To register for the Online course or self study program: purchase the course from the DAMA Edmonton Store and you will receive an email with the website, user name and password within 48 hours of payment.</p>
                    </div>
                   
                </div>
                
            </div>
            <CertificatinInfo/>
            <FeedBackForm/>

        </div>
    )
}