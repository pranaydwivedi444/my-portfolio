import React from "react";
import "./Hero.styles.css";
import myself from "./myself.png";
import coding from "./coding.png";

function Hero() {
  return (
    <div className="hero__container">
      <div className="hero__left">
        <img src={myself} alt="my details" />
      </div>
      <div className="hero__right">
        <div className="hero__right__imageContainer">
          {/* 3d model */}
          <img src={coding} alt="coding space" srcset="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
