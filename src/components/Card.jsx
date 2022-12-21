import { Link } from "gatsby";
import React from "react";
import '../styles/card.css';

export default function Card(props) {
    return (
        <div className="my-card">
            <div className="img-div">
                <Link to="/"><img className="img-fluid" src={props.src} alt="" /></Link>                
            </div>
            <div>
                <Link to="/"><h6>{props.title}</h6></Link>
                <Link to="/"><h5>{props.text}</h5></Link>
            </div>
        </div>
    );
}
