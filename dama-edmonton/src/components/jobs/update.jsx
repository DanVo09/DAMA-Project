import React, {useState, useEffect }  from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function UpdateJob() {
    const navigatesecue = useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('user-info')){
           
            navigatesecue("/login")
        }
    })

    const [name, setName] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("user-info");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });

      const userId = Number(name.map(obj => obj.user_id));

    const [jobdata, setjobdata] = useState([]);

    const {posting_id} = useParams();

    useEffect(async ()=> {
        let result = await fetch(`http://dama.web.dmitcapstone.ca/api/update_job?id=${posting_id}`);
        result = await result.json();
        setjobdata(result);

    }, [posting_id])

    const filterJobData = jobdata.filter(obj=> obj.user_id  === userId)

    const [job_title,setJobTitle]=useState("")
    const [company_name,setCompanyName]=useState("")
    const [location,setLocation]=useState("")
    const [job_desc,setJobDesc]=useState("")
    const [error, setError]=useState([])
  

    async function JobUpdated(e)
    {
        e.preventDefault();
        let item = {job_title, company_name, location, job_desc}

        
        const res = await axios.post(`http://dama.web.dmitcapstone.ca/api/job_updated?id=${posting_id}`, item);

        if(res.data.validate_err) {
            setError(res.data.validate_err)
            console.log(error)
        } else {

            Swal.fire({  
                icon: 'success',  
                title: 'Successful!',  
                text: res.data.message,  
              }); 
        }
    

    }

    return(

        <div className="form-wrapper">
          <div  className="login-form-container">
            <h1>Edit A Job</h1>
                    <div className="form">
                        
                    <label htmlFor="job_title">Job Title</label>
                    <input type="text" defaultValue={ (job_title)? job_title: filterJobData.map(obj => obj.job_title)} onChange={(e)=>setJobTitle(e.target.value)}  name="job_title"/>
                    <span className='error'>{error.job_title}</span>

                    <label htmlFor="company_name">Company Name</label>
                    <input type="text" defaultValue={ (company_name)? company_name: filterJobData.map(obj => obj.company_name)} onChange={(e)=>setCompanyName(e.target.value)}  name="company_name" />
                    <span className='error'>{error.company_name}</span>

                    <label htmlFor="location">Location</label>
                    <input type="text" defaultValue={ (location)? location: filterJobData.map(obj => obj.location)}  onChange={(e)=>setLocation(e.target.value)}  name="location"  />
                    <span className='error'>{error.location}</span>

                    <label htmlFor="job_desc">Job Description</label>
                    <textarea name="job_desc" col="5" rows="5" defaultValue={ (job_desc)? job_desc: filterJobData.map(obj => obj.job_desc)} onChange={(e)=>setJobDesc(e.target.value)}  ></textarea>
                    <span className='error'>{error.job_desc}</span>

                    <button type='submit' onClick={JobUpdated}>Update Job</button>
                </div>
            </div>
             
        </div>
        
           
    )
}

export default UpdateJob;