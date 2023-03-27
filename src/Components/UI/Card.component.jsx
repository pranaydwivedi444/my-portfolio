import React from "react";
import "./Card.styles.css";

function Card(props) {
  return (
    <>
      <div className={`card ${props.color}`}>
        <div className="overlay" />
        <div className="circle">{props.svg}</div>
        <p>{props.name}</p>
      </div>
    </>
  );
}

export default Card;
