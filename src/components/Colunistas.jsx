import React from "react";
import SlideItem from "../components/SlideItem.jsx";
import { colunistas1, colunistas2 } from '../script/colunistas.js';
import Slider from "react-slick";
import '../styles/slideItem.css';

const createColunistas = (colunista) => {
    return (
        <SlideItem
            src={colunista.src}
            title={colunista.title}
            text={colunista.text}>
        </SlideItem>
    );
}

export default function Colunistas() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        className: 'colunista-item'
    };
    return (
        <Slider {...settings}>
            <div className="colunista-item">
                {colunistas1.map(createColunistas)}
            </div>
            <div className="colunista-item">
                {colunistas2.map(createColunistas)}
            </div>
        </Slider>
    );
}
