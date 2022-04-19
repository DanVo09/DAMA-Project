
import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import JobSearchBar from '../searchBar/job-SearchBar';
import JobMenu from './jobmenu';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FormControlUnstyledContext } from '@mui/base';



export default function UserJobList () {

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


    const [data, setData] = useState([]);
    useEffect(async ()=> {
        let result = await fetch("http://dama.web.dmitcapstone.ca/api/all_jobs");
        result =await result.json();
        setData(result);

    },[])

    async function DeleteJob(e, posting_id)
    {
        console.log(`http://dama.web.dmitcapstone.ca/api/job_filled?id=${posting_id}`)
        e.preventDefault();
        const res = await axios.get(`http://dama.web.dmitcapstone.ca/api/job_filled?id=${posting_id}`);
        
        Swal.fire({  
            icon: 'success',  
            title: 'Successful!',  
            text: res.data.message,  
        }); 
    

    }



    const filterData = data.filter(obj=> obj.user_id  === userId)

    console.log(filterData)

    return(
        <div className="job-page-wrapper">
            <div className='course-banner' style={{background: `url("assets/images/profile-picture/background.jpg") center/cover no-repeat` }}>
                <h1>Jobs Board</h1>
            </div>
            <JobSearchBar/>
           <JobMenu/>
            <div  className='job-list'>
            {filterData.map((obj) => {
                return(
                    <div key={obj.posting_id}  className="job-detail">
                        <h2>{obj.job_title}</h2>
                        <h3>{obj.company_name}</h3>
                        <p>{obj.location}</p>
                        <p>{obj.job_desc.length < 120  ? `${obj.job_desc}` : `${obj.job_desc.substring(0, 120)}...`}</p>
                        <div className='apply-links'>
                            <Link to={`/updatejob/${obj.posting_id}`}>Edit</Link>
                            <button onClick={(e) => DeleteJob(e, Number(obj.posting_id))}>Delete</button>
                            <Link to={`/jobsboard/${obj.posting_id}`}>More Detail</Link>
                        </div>
                        
                    </div>
                
                )
                 
            })}
           </div>
        </div>
    )
}