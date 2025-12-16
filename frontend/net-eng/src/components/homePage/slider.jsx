import React, { useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.png";
import slide3 from "../../assets/slide3.png";
import "../../styles/homePage/slider.css";

export default function MySlider() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    arrows: false, 
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    draggable: true,
  };

  return (
    <div className="slider-wrapper">
      <button className="slider-arrow left" onClick={() => sliderRef.current.slickPrev()}>›</button>
      <button className="slider-arrow right" onClick={() => sliderRef.current.slickNext()}>‹</button>
      <Slider ref={sliderRef} {...settings}>
        <div className="slide">
          <img src={slide1} alt="" />
        </div>
        <div className="slide">
          <img src={slide2} alt="" />
        </div>
        <div className="slide">
          <img src={slide3} alt="" />
        </div>
      </Slider>
    </div>
  );
}
