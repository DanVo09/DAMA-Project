import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function JobMenu() {


    return (
        <>
        
            <div className='job-menu'>
                <Link to="/jobsboard">All Jobs</Link>
                <Link to= "/userjobposting">My Job Posting</Link>
                <Link to="/insertjob">Post a Job</Link>
                

            </div>
         
        </>
    )
}
