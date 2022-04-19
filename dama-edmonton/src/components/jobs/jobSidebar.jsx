import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";


export default function JobSideBar() {

    const [jobData, setJobData] = useState([]);
    useEffect(async ()=> {
        let result = await fetch("http://dama.web.dmitcapstone.ca/api/all_jobs");
        result =await result.json();
        setJobData(result);

    },[])
    
    const {posting_id} = useParams();
    console.log(posting_id)
    const jobdetaildata = jobData.filter(obj => obj.posting_id === Number(posting_id));

    console.log(jobdetaildata)
    const titleName = jobdetaildata.map(obj => obj.job_title).toString();
    console.log(titleName)

    const sidebarData = jobData.filter(obj => obj.job_title === titleName);

    console.log(sidebarData)

    return(
         <div className='sidebar'>
            <h2>Jobs</h2> 
            <ul>
                {sidebarData.map((obj, posting_id) => {
                    
                    return(
                        <li key={obj.posting_id}>
                            <Link to={`/jobsboard/${obj.posting_id}`} >
                                <h3>{obj.job_title}</h3>
                               <p>{obj.company_name}</p> 
                               <p>{obj.location}</p>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div> 
    )
}