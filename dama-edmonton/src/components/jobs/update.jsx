import React, {Component, useEffect, useState}  from "react";
import axios from "axios";
import Swal from "sweetalert2";


class UpdateAJob extends Component{
    state = {
        job_title: '',
        company_name: '',
        location: '',
        job_desc:'',
        error_list:[],
        user_id: Number(JSON.parse(localStorage.getItem("user-info")).map(obj => obj.user_id)),
    }


    

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    async dataEditPosting(match) {
        const job_id = this.props.match.params.id;
        console.log(job_id);
       
    }

/*
    updateJob = async (e) => {
        e.preventDefault();

        const res = await axios.post('http://dama.web.dmitcapstone.ca/api/job_updated', this.state);
        if(res.data.validate_err)
        {
            this.setState({
                error_list: res.data.validate_err,
                
           }); 
        } else {
            Swal.fire({  
                icon: 'success',  
                title: 'Successful!',  
                text: res.data.message,  
              }); 

            this.setState({
                job_title: '',
                company_name: '',
                location: '',
                job_desc:'',
            });
        }
    

}
*/
    render(){
        return(
            <div className="form-wrapper">
            <form onSubmit={this.updateJob} className="login-form-container">
            <h1>Edit a Job</h1>
                <div className="form">
                    <label htmlFor="job_title">Job Title</label>
                    <input type="text" id="job_title" onChange={this.handleInput} value={this.setState.job_title} name="job_title"/>
                    <span className='error'>{this.state.error_list.job_title}</span>
                    <label htmlFor="company_name">Company Name</label>
                    <input type="text" id="company_name" onChange={this.handleInput} value={this.setState.company_name} name="company_name"  />
                    <span className='error'>{this.state.error_list.company_name}</span>

                    <label htmlFor="location">Location</label>
                    <input type="text" id="location" onChange={this.handleInput} value={this.setState.location} name="location"  />
                    <span className='error'>{this.state.error_list.location}</span>

                    <label htmlFor="job_desc">Job Description</label>
                    <textarea name="job_desc" onChange={this.handleInput} id="job_desc">{this.setState.job_desc}</textarea>
                    <span className='error'>{this.state.error_list.job_desc}</span>

                    <button type='submit'>Update Job</button>
                </div>
               
            </form>
             
        </div>
        );
    }
}

export default function UpdateJob() {
    return(

        <UpdateAJob/>
           
    )
}



