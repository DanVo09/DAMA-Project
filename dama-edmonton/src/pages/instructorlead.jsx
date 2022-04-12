import React from "react";
import { Link } from 'react-router-dom';
import SearchBar from '../components/searchBar/searchBar';
import CourseSideBar from '../components/courses/course-sidebar';
import FeedBackForm from "../components/feedbackForm/feedbackForm";
import CertificatinInfo from "../components/courses/certification-info";

export default function InstructorLed() {
    return(
        <div className="selfstudy-page-wrapper">
            <div className='selfstudy-banner' style={{background: ` url("assets/images/profile-picture/background.jpg") center/cover no-repeat` }}>
                <h1>TRAINING, EDUCATION, CERTIFICATION</h1>
            </div>
            <SearchBar/>
            <div className='main-container'>
                <CourseSideBar />
                <div className="content-detail">
                    <h2>Instructor-Led, Group Study-paced Learning</h2>
                    <p>Cohort Paced, 12 week program, one hour/once per week live discussion and Q&amp;A - approximately 4-6 hours/week study time requirement</p>
                    <p>Each module has a pre-test and post-test quizzes, module questions for weekly work and a weekly study guide</p>
                    <p>Tuition:  $1295</p>
                    <div>
                        <h3>Time</h3>
                        <p>Course Start Dates: January 19, June 17, September 20</p>
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