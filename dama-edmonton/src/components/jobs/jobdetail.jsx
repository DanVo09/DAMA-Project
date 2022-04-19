import React, { useState, useEffect, useContext} from 'react';
import { Link, useParams } from 'react-router-dom';
import JobSideBar from './jobSidebar';
import JobSearchBar from '../searchBar/job-SearchBar';


export default function JobDetail() {

    const [jobData, setJobData] = useState([]);
    useEffect(async ()=> {
        let result = await fetch("http://dama.web.dmitcapstone.ca/api/all_jobs");
        result =await result.json();
        setJobData(result);

    },[])
    
    console.log(jobData)

    const {posting_id} = useParams();
  
    const selectedJob = jobData.filter(obj => obj.posting_id === Number(posting_id));
    

    return (
         
        <div className="job-detail-page-wrapper">
            <JobSearchBar/>
           
            <div className='main-container'>
                <JobSideBar/>
                
                {selectedJob.map((obj, posting_id) => {
                    
                    return(
                        
                        <div key={obj.posting_id}  className="event-content">
                            
                            <div className="content-detail">
                                <div className="card-content-wrapper">
                                    <h3>{obj.job_title}</h3>
                                    <p> {obj.company_name}</p>
                                    <p>Location: {obj.location}</p>
                                    <p>Description: {obj.job_desc}</p>
                                    <Link to="/applyjob">Apply Now</Link>
                                </div>
                            </div>
                        </div>

                    )
                })}
               
            </div>
           
        </div> 
        
    )
}
