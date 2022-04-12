import React from "react";

export default function InsertJob() {
    return(

        <div className="form-wrapper">
            <form className="login-form-container">
            <h1>Post a Job</h1>
                <div className="form">
                    <label for="job_title">Job Title</label>
                    <input type="text" id="job_title" name="job_title"/>

                    <label for="company_name">Company Name</label>
                    <input type="text" id="company_name" name="company_name"/>

                    <label for="location">Location</label>
                    <input type="text" id="location" name="location"/>

                    <label for="job_desc">Job Description</label>
                    <textarea name="job_desc" id="job_desc"></textarea>
                    
                    <button type='submit'>Post Job Listing</button>
                </div>
               
            </form>
             
        </div>
           
    )
}