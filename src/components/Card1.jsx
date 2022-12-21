import { Link } from "gatsby";
import React from "react";
import '../styles/card.css';

export default function Card1(props) {
  return (
    <div className="card1">
        <Link to="/"><h6>{props.title}</h6></Link>
        <Link to="/"><h5>{props.text}</h5></Link>
    </div>
  );
}
