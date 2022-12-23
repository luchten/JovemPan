import React from "react";
import '../styles/slide.css';
import { Link } from "gatsby";

export default function Slide(props) {
    return (
        <Link to="/">
            <div className="my-slide">
                <img src={props.src} alt="" />
                <div className="slide-text">
                    <h6>{props.title}</h6>
                    <h5>{props.link}</h5>                    
                </div>
            </div>
        </Link>
    );
}