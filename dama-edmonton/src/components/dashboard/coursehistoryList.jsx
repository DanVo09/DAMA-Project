import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';



export default function CourseHistoryList() {

    const navigate = useNavigate();

  useEffect(()=>{
      if(!localStorage.getItem('user-info')){
          navigate("/login")
      }
  })

  const [name, setName] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("user-info");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const userId = Number(name.map(obj => obj.user_id)); 
  console.log(userId)

  const [courseHistoryData, setcourseHistoryData] = useState([]);
    useEffect(async ()=> {
        let result = await fetch(`http://dama.web.dmitcapstone.ca/api/user_courses?user_id=${userId}`);
        result =await result.json();
        setcourseHistoryData(result);

    },[])

    console.log(courseHistoryData)
    
    return (
      <>
         
                    <section className='user-courses'>
                    <div>
                    <h3>Courses History</h3>
                     <table>
                        <tr>
                          <th>Course Id</th>
                          <th>Course Name</th>
                          <th>Status</th>
                          <th>Date Start</th>
                          <th>Date End</th>
                        </tr>
                        {courseHistoryData.map((obj, course_id) => {
                        return (
                                <tr key={obj.course_id}>
                                    <td>{obj.course_id}</td>
                                    <td><Link to={`/courses/${obj.course_id}`}>{obj.course_name}</Link></td>
                                    <td>{obj.end_date === null? "In Progress" : "Completed"}</td>
                                    <td>{obj.start_date}</td>
                                    <td>{obj.end_date}</td>
                                </tr>
                                )
                        })}
                      </table>
                      <div className='course-history-list'>
                      {courseHistoryData.map((obj, course_id) => {
                        return (
                            <div key={obj.course_id} className='course-history-detail'>
                                <div>
                                    <p>Course ID:</p>
                                    <p>{obj.course_id}</p>
                                </div>
                                <div>
                                    <p>Course Name:</p>
                                    <p> <Link to={`/courses/${obj.course_id}`}>{obj.course_name}</Link> </p>
                                </div>
                                <div>
                                    <p>Status:</p>
                                    <p>{obj.end_date=== null? "In Progress" : "Completed"}</p>
                                </div>
                                <div>
                                    <p>Date Start:</p>
                                    <p>{obj.start_date}</p>
                                </div>
                                <div>
                                    <p>Date End:</p>
                                    <p>{obj.end_date}</p>
                                </div>
                            </div>
                           )
                        })}
                      </div>
                    </div>
                  </section>
               
             
         
          
        </>
      );
}



