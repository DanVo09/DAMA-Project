import React, {useState, useEffect} from "react";
import './searchBar.css';
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';


export default function JobSearchBar(){


    const [jobData, setJobData] = useState([]);
    useEffect(async ()=> {
        let result = await fetch("http://dama.web.dmitcapstone.ca/api/all_jobs");
        result =await result.json();
        setJobData(result);

    },[])
    
    const [filteredData, setFilterData] = useState([]);
    const [wordEnter, setWordEnter] = useState("");
    const handleFilter = (job) => {
        const searchWord = job.target.value;
        setWordEnter(searchWord);
        const newFilter = jobData.filter((value)=>{
            return value.job_title.toLowerCase().includes(searchWord.toLowerCase());
        });
        if(searchWord===""){
            setFilterData([]);
        }else {
            setFilterData(newFilter);
        }
       
    };

    const CloseInput = () => {
        setFilterData([]);
        setWordEnter("");
    }

    return(
        <>
        <div className='search-form'>
            <input type="text" name="search-bar" placeholder="Find a job" value={wordEnter} onChange={handleFilter}/>
            {filteredData.length === 0 
                ? 
                <SearchIcon className="search-icon"/> 
                : 
                <CloseIcon className="search-icon" id="close-button" onClick={CloseInput}/>
            }
            
        </div>
        {filteredData.length !=0 &&(
             <div className="dataResult">

                {filteredData.slice(0,10).map((value,id)=>{
                    return(
                        <div>
                            <Link to={`/courses/${value.posting_id}`}>{value.job_title}</Link> 
                        </div>
                    )
                })}
            </div>
        )}
       
        </>
    )
}