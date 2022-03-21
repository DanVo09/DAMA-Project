import React, {useState} from "react";
import './searchBar.css';
import CourseData from "../courses/course-data";
import { Link } from "react-router-dom";

export default function SearchBar({placeholder, data}){
    
    const [filteredData, setFilterData] = useState([]);
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        const newFilter = CourseData.filter((value)=>{
            return value.courseTitle.toLowerCase().includes(searchWord.toLowerCase());
        });
        if(searchWord===""){
            setFilterData([]);
        }else {
            setFilterData(newFilter);
        }
       
    }
    return(
        <>
        <div className='search-form'>

            <button>Courses</button>
            <input type="text" name="search-bar" placeholder={placeholder} onChange={handleFilter}/>
            <input type="submit" name="search-submit" id="search-submit" value="Search"/>
            
        </div>
        {filteredData.length !=0 &&(
             <div className="dataResult">

                {filteredData.slice(0,10).map((value,id)=>{
                    return(
                        <div>
                            <Link to={`/courses/${value.id}`}>{value.courseTitle}</Link> 
                        </div>
                    )
                })}
            </div>
        )};
       
        </>
    )
}