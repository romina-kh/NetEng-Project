import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.png";
import slide3 from "../../assets/slide3.png";
import "../../styles/homePage/slider.css"

export default function MySlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
    draggable: true,
    swipeToSlide: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div><img src={slide1} className="slider-img" /></div>
        <div><img src={slide2} className="slider-img" /></div>
        <div><img src={slide3} className="slider-img" /></div>
      </Slider>
    </div>
  );
}