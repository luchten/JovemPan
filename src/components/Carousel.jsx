import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";
import slides from '../script/slides.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/slide.css';

const createSlides = (slide) => {
    return (
      <Slide
        src={slide.src}
        title={slide.title}
        link={slide.link}>
      </Slide>
    );
  }

export default function Carousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        className: 'carousel-dots'
    };
    return (
        <Slider {...settings}>
            {slides.map(createSlides)}
        </Slider>
  );
}
