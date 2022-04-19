

import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import Swal from 'sweetalert2';




export default function ApplyJob() {

  
    const {id} = useParams();


    console.log(id)

    const [full_name,setFullName]=useState("")
    const [email,setEmail]=useState("")
    const [resume,setResume]=useState("")
    const [job_title, setJobTitle] = useState("")
    const [posting_id, setPostingId] = useState("")
    const [error, setError]=useState([])


    useEffect(async ()=> {
        
        const result = await axios.get(`http://dama.web.dmitcapstone.ca/api/update_job?id=${id}`);
       
        setJobTitle(result.data.map(obj => obj.job_title))
        setPostingId(result.data.map(obj => obj.posting_id))
    },[id])

    console.log(job_title)



    async function ApplyJob(e) {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('resume',resume);
        formData.append('full_name',full_name);
        formData.append('email', email);
        formData.append('job_title', job_title);
        formData.append('posting_id', posting_id);
       
        
        const res = await axios.post(`http://dama.web.dmitcapstone.ca/api/job_applied?id=${id}`, formData);
        if(res.data.message) {
           

            Swal.fire({  
                icon: 'success',  
                title: 'Successful!',  
                text: res.data.message,  
              }); 
        } else {
            setError(res.data.validate_err)
        }
    }

    
    return (
        <div className='form-wrapper'>
          <div className="signup-form-container" >
            <h1>Apply For {job_title}</h1>
                
                <div class="form" >    
                    <label htmlFor="full_name">Full Name</label>
                    <input type="text" onChange={(e)=>setFullName(e.target.value)} id="full_name" name="full_name"/>
                   

                    <label htmlFor="email">Email for Contact</label>
                    <input type="text"  onChange={(e)=>setEmail(e.target.value)}  id="email" name="email"/>

                    <label htmlFor="resume">Upload Your Resume</label>
                    <input type="file"  onChange={(e)=>setResume(e.target.files[0])}  id="resume" name="resume"/>
                    <span className='error'>{error.resume}</span>

                    <button type="submit" onClick={ApplyJob}  >Submit Application</button>
                </div>   
          </div>
        </div>
    )
}



