import "./Experience.styles.css";
import React from "react";
import VerticalLine from "../../UI/VerticalLine/VerticalLine.component";
import Title from "../../UI/Title/Title.component";

function Experience() {
  return (
    <div className="experience__container">
      <div className="experience__title">
        <Title>Career Highlights</Title>
      </div>
      <VerticalLine />
    </div>
  );
}

export default Experience;
