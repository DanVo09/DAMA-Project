import React, { useState, useEffect, useContext} from 'react';
import { Link, useParams } from 'react-router-dom';
import CourseSideBar from './course-sidebar';
import CourseData from './course-data';
import CartContext from '../../context/cart/CartContext';


export default function CourseDetail({obj}) {
    const { addToCart } = useContext(CartContext)
    const {id} = useParams();
    console.log(id);
    const selectedCourse = CourseData.filter(obj => obj.id === id);
    console.log(selectedCourse);

    return (
        <> 
        <div className="course-detail-page-wrapper">
            <div className='main-container'>
                <CourseSideBar/>
                
                {selectedCourse.map((obj, id) => {
                    
                    return(
                        
                        <div key={obj.id}  className="course-content">
                            <div className="course-card-img-container">
                                <img className="event-card-img" src={process.env.PUBLIC_URL + `/assets/images/${obj.coursePicture}`} alt="#" />
                            </div>
                            <div className="course-content-detail">
                                <div className="card-content-wrapper">
                                    <h2>{obj.courseTitle}</h2>
                                    <h3>{obj.courseInstructor}</h3>
                                    <p>{obj.startDate}</p>
                                    <p>{obj.courseDetail}</p>
                                    <Link to="#" id="selfStudy" onClick={ () => addToCart(obj)}>Enroll - Self Study</Link>
                                    <Link to="#" id="instructorLead">Enroll - Instructor Lead</Link>
                                </div>
                            </div>
                        </div>

                    )
                })}
            </div>
        </div> 
        </>
    )
}
