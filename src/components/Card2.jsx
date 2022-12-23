import React from "react";
import '../styles/card.css';
import { Link } from "gatsby";

export default function Card2(props) {
    return (
        <Link to="/">
            <div className="free-card1">
                <img src={props.src} alt="" />
                <div className="text-div1">
                    <h6>{props.title}</h6>
                    <h5>{props.link}</h5>
                    <p>{props.text}</p>
                </div>
            </div>
        </Link>
    );
}
