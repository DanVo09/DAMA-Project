import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import JobSideBar from '../components/searchBar/job-SearchBar';

export default function Jobsboard() {
    

    const [data, setData] = useState([]);
    useEffect(async ()=> {
        let result = await fetch("http://dama.web.dmitcapstone.ca/api/all_jobs");
        result =await result.json();
        setData(result);

    },[])

    return (
        <>
        <div className="job-page-wrapper">
            <div className='course-banner' style={{background: `url("assets/images/profile-picture/background.jpg") center/cover no-repeat` }}>
                <h1>Jobs Board</h1>
            </div>
            <JobSideBar/>
            <div  className='job-list'>
            {data.map((obj) => {
                return(
                    <div key={obj.posting_id}  className="job-detail">
                        <h2>{obj.job_title}</h2>
                        <h3>{obj.company_name}</h3>
                        <p>{obj.location}</p>
                        <p>{obj.job_desc.length < 120  ? `${obj.job_desc}` : `${obj.job_desc.substring(0, 120)}...`}</p>
                       
                        <div className='apply-links'>
                            <Link to={`/updatejob/${obj.posting_id}`}>Edit</Link>
                            <Link to="#">Apply Now</Link>
                            <Link to="#">More Detail</Link>
                        </div>
                        
                    </div>
                
                )
                 
            })}
           </div>
        </div>
        </>
    )
}
