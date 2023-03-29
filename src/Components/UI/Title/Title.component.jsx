import React from "react";
import "./Title.styles.css";

function Title(props) {
  return (
    <>
      <h2 className="UI__title"> {props.children}</h2>
    </>
  );
}

export default Title;
