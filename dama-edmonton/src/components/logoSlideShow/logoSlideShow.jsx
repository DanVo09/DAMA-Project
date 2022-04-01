import React, {Component} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
import "./logoSlideShow.css";
import LogoData from "./logodata";

export default class LogoSlideShow extends Component {

    render() {
        var settings = {
          dots: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 5,
          slidesToScroll: 4,
          initialSlide: 0,
          autoplay: true,
          autoplaySpeed: 2000,
          cssEase: "linear",
          responsive: [
            {   
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 320,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };

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
                            <img className="logo-img" src={`assets/images/logo/${current.logoName}`} alt={`name${current.companyName}`}/>
                        </div>
                    </div>
                )
               )}
               
               </Slider>
           )}
           </div>
        </>
    );

}
}