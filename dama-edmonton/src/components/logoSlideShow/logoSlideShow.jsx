import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
import "./logoSlideShow.css";
import LogoData from "./logodata";

export default function LogoSlideShow() {


    let settings = {
        infinite: false,
        speed: 1000,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll:4,
    }

    return (
        <>
        <div className="logo-flex">
           {LogoData.length===0?(
               <div>
                   <span>Loading...</span>
               </div>
           ):(
               <Slider {...settings}>
               
               {LogoData.map(current=>(
                <div className="out" key={current.id}>
                    <div className="logo">
                        <img src={`assets/images/logo/${current.logoName}`} alt={`name${current.companyName}`}/>
                    </div>

                </div>
               )
               )}
               
               </Slider>
           )}
           </div>
        </>
    )
}
