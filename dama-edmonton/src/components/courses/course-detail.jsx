import React, { useState, useEffect, useContext} from 'react';
import { Link, useParams } from 'react-router-dom';
import CourseSideBar from './course-sidebar';
import CourseData from './course-data';
import CartContext from '../../context/cart/CartContext';
import SearchBar from '../searchBar/searchBar';

export default function CourseDetail({obj}) {
    const { addToCart } = useContext(CartContext)
    const {id} = useParams();
    console.log(id);
    const selectedCourse = CourseData.filter(obj => obj.id === id);
    console.log(selectedCourse);

    const [data, setData] = useState([]);
    useEffect(async ()=> {
        let result = await fetch("http://127.0.0.1:8000/api/courselist");
        result =await result.json();
        setData(result);

    },[])

    
    console.warn("result", data)

    return (
        <> 
        <div className="course-detail-page-wrapper">
            <SearchBar/>
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

                <div className='test-data'>
                    <h3>Test Data from Laravel</h3>
                    {
                        data.map((item)=>
                            <div>
                                <p>Course ID: {item.course_id}</p>
                                <p>Course name: {item.course_name}</p>
                                <p>Course description: {item.course_description}</p>
                                <p>Course price: {item.course_price}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div> 
        </>
    )
}
