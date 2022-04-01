import React from "react";
import { Link } from "react-router-dom";
import ThoughtLeaderData from "./ThoughtLeaderData";

export default function ThoughtLeader () {
    return (
        <>
        {ThoughtLeaderData.map((obj, id) => {
            return (
                <div key={obj.id} className="person-profile-details">
                    <Link className="navItem" to="/#" onClick="window.location.reload();">
                        <img src={process.env.PUBLIC_URL + `/assets/images/profile-picture/${obj.imageName}`} alt="images"/>
                        <h4>{obj.name}</h4>
                    </Link>
                </div> 
            )
        })}
        </>
    )
}