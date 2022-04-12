import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

export default function CourseList(){

    const [courseData, setCourseData] = useState([]);
    useEffect(async ()=> {
        let result = await fetch("http://dama.web.dmitcapstone.ca/api/all_courses");
        result =await result.json();
        setCourseData(result);

    },[])

    console.log(courseData)


    const selflstudyData = courseData.filter(obj=> obj.course_type_id  == 2)


    const [pageNumber, setPageNumber] = useState(0);

    const eventPerPage = 3
    const pagesVisited = pageNumber*eventPerPage

   
    const displayEvents = selflstudyData.slice(pagesVisited, pagesVisited + eventPerPage).map((obj) =>{
        return(                
            <div key={obj.event_id}  className="course-card">
                <div className="course-card-img-container">
                    <img className="course-card-img" src="/assets/images/events/2.jpg" alt="#" />
                </div>
                <div className="event-card-content">
                    <div className="card-content-wrapper">
                        <h2>{obj.course_name}</h2>
                        <p>{obj.course_description}</p>
                        <Link to={`/events/${obj.course_id}`} >Learn More/Register</Link>
                    </div>
                </div>
            </div>

        )
    });
    const pageCount = Math.ceil(selflstudyData.length / eventPerPage)
    const changePage = ({selected}) => {
        setPageNumber(selected);
    }
    
    return(
        <div className='event-list'>
            <h2>Courses</h2>
            <div className='event-flex'>
                {displayEvents}
            </div>
            <ReactPaginate 
                previousLable={"Previous"}
                nextLable={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBtn"}
                previousLinkClassName={"previousBtn"}
                nextLinkClassName={"nextBtn"}
                activeClassName={"paginationActive"}
                pageLinkClassName={"pageNumberBtn"}

            />
        </div>

    )
}