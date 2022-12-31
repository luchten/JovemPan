import React from "react";
import { Link } from "gatsby";

export default function SlideItem(props) {
    return (
        <Link to="/">
            <div className="my-slide-item">
                <div className="slide-item-img">
                    <img src={props.src} alt="" />
                </div>
                <div className="slide-item-text">
                    <h6>{props.title}</h6>
                    <h5>{props.text}</h5>
                </div>
            </div>
        </Link>
    );
}
