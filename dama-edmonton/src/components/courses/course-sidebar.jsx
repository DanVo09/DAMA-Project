import React, {useState} from "react";
import { Link } from "react-router-dom";
import CourseData from "./course-data";
import './course-sidebar.css';

export default function CourseSideBar() {
    
    
    return(
         <div className='sidebar'>
            <h2>Online Courses</h2> 
            <ul>
                {CourseData.map((obj,id) => {
                    
                    return(
                        <li key={obj.id}><Link to={`/courses/${obj.id}`}>{obj.courseTitle}</Link></li>
                    )
                })}
            </ul>
        </div> 
    )
}