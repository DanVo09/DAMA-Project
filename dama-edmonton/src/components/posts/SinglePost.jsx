import React from 'react'
import PostData from './postData'
import TimeAgo from 'timeago-react';

export default function Singlepost() {
    

    return (
        <div className='single-container'>
            {PostData.map((obj, id) => {
                return(

                    <div className="single-wrapper" key={obj.id}>
                <div className="post-header">
                    <img src={process.env.PUBLIC_URL + `/assets/images/${obj.picture}`} alt="" className='post-img'/>
                    <h1 className="single-post-title">{obj.title}</h1>
                    <h3 className='single-post-author'>{obj.author}</h3>
                    <h3 className="single-post-date"><TimeAgo datetime={new Date().getTime() - 1000 * 11} live={false} /></h3>
                </div>
                <pre className='single-post-content'>{obj.desc}
                </pre>
            </div>

                )
            })}
            
        </div>
    )
}
