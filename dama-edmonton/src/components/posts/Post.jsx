import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import TimeAgo from 'timeago-react';
import PostData from './postData'
import ReactPaginate from 'react-paginate';

export default function Post() {
    
        return (
            <>

{PostData.map((obj, id) => {

return (
    <div className='post' key={obj.id}>
    <img src={process.env.PUBLIC_URL + `/assets/images/${obj.picture}`} alt="" className='post-img'/>
    <div className="post-info">
        <div className="post-categories">
            <p className="post-category">{obj.author}</p>
        </div>
        <Link to={`/post`}><h3 className="post-title">{obj.title}</h3></Link>
        <p className="post-date">
        <TimeAgo datetime={new Date().getTime() - 1000 * 11} live={false} />
        </p>
    </div>
    <p className="post-desc">{obj.desc}</p>
    </div>
)

})}

            </>
        )

}
