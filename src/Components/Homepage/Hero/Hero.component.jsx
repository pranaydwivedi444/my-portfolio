import React from "react";
import "./Hero.styles.css";
import myself from "./myself.png";
import coding from "./coding.png";

function Hero() {
  function handleResumeClick() {
    // window.location.href = "https://drive.google.com/your-link-here";
    window.open(
      "https://docs.google.com/document/d/1AMNCHDTh-OmO_2XC44ofyWGXOdslSVTKr4gwP3E-kHA",
      "_blank"
    );
  }
  return (
    <div className="hero__container">
      <div className="hero__left">
        <div className="img__container">
          <img src={myself} alt="my details" />
        </div>
        <div className="hero__resume">
          <button
            onClick={handleResumeClick}
            className="glow-on-hover"
            type="button"
          >
            Resume
          </button>
        </div>
      </div>
      <div className="hero__right">
        <div className="hero__right__imageContainer">
          {/* 3d model */}
{/*           <img src={coding} alt="coding space" /> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
