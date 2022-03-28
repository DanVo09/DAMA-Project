import React, {useState} from "react";
import './searchBar.css';
import Events from "../eventCard/dummyData";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

export default function EventSearchBar(){
    
    const [filteredData, setFilterData] = useState([]);
    const [wordEnter, setWordEnter] = useState("");
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEnter(searchWord);
        const newFilter = Events.filter((value)=>{
            return value.eventTitle.toLowerCase().includes(searchWord.toLowerCase());
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

            <button>Events</button>
            <input type="text" name="search-bar" placeholder="Find an event" value={wordEnter} onChange={handleFilter}/>
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
                            <Link to={`/events/${value.id}`}>{value.eventTitle}</Link> 
                        </div>
                    )
                })}
            </div>
        )}
       
        </>
    )
}