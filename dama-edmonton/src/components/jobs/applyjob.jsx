
import React from 'react'


export default function ApplyJob() {

  
    
    return (
        <div className='form-wrapper'>
          <div className="signup-form-container">
            <h1>Apply For Job</h1>
                
                <div class="form">    
                    <label htmlFor="full_name">Full Name</label>
                    <input type="text" id="full_name" name="full_name"/>

                    <label htmlFor="email">Email for Contact</label>
                    <input type="text" id="email" name="email"/>

                    <label htmlFor="resume">Upload Your Resume</label>
                    <input type="file" id="resume" name="resume"/>

                    <button type="submit" >Submit Application</button>
                </div>   
          </div>
        </div>
    )
}



