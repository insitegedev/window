import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./DragSlide.css";

const DragSlide = ({ sliderData }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    // autoplay: true,
    // autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="service_slider">
      {sliderData &&
          sliderData.map((item) => {
        return (
          <div className="img">
            <img src={"/"+item.path+"/"+item.title} alt="" />
          </div>
        );
      })}
    </Slider>
  );
};

export default DragSlide;
