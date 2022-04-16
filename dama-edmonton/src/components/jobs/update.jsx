import React, {useState, useEffect }  from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";



function UpdateJob() {

  
    const [jobdata, setjobdata] = useState([]);

    const {posting_id} = useParams();

    useEffect(async ()=> {
        let result = await fetch(`http://dama.web.dmitcapstone.ca/api/update_job?id=${posting_id}`);
        result = await result.json();
        setjobdata(result);

    }, [posting_id])

    console.log(jobdata)
    const jobtitle = jobdata.map(obj => obj.job_desc)
    console.log(jobtitle)

    return(

        <div className="form-wrapper">
          <form  className="login-form-container">
            <h1>Edit A Job</h1>
                    <div className="form">
                        
                    <label htmlFor="job_title">Job Title</label>
                    <input type="text" defaultValue={jobdata.map(obj => obj.job_title)}   name="job_title"/>
                    <span className='error'></span>
                    <label htmlFor="company_name">Company Name</label>
                    <input type="text" defaultValue={jobdata.map(obj => obj.company_name)} name="company_name"  />

                    <label htmlFor="location">Location</label>
                    <input type="text" defaultValue={jobdata.map(obj => obj.location)}  name="location"  />
                    <span className='error'></span>

                    <label htmlFor="job_desc">Job Description</label>
                    <textarea name="job_desc" defaultValue={jobdata.map(obj => obj.job_desc)} ></textarea>
                    <span className='error'></span>

                    <button type='submit'>Update Job</button>
                </div>
            </form>
             
        </div>
        
           
    )
}

export default UpdateJob;