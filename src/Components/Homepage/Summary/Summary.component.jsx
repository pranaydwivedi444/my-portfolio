import "./Summary.styles.css";
import React from "react";
import TechStack from "../../TechStack/TechStack.component";
import Title from "../../UI/Title/Title.component";

function Summary() {
  return (
    <div className="summary__container">
      <div className="summary__introduction">
        <h1>Introduction</h1>
        <p>
          Namaskar, I am highly motivated and creative front-end developer (Full
          Stack) , I specialize in React (MERN), Next.js, and TypeScript. <br />{" "}
          Beyond coding, I am experienced in social media management, video
          editing, and podcasting. <br /> With a passion for learning and
          developing new skills, I'm excited to collaborate on projects that
          challenge me
          <br /> and push me to continue learning and growing as a developer.
          <br /> Let's work together to bring your ideas to life!
          <br />{" "}
          <a href="https://linktree.com/pranaydwivedi32">Connect with me 👋🏻 </a>
        </p>
      </div>
      <Title>SKILLS</Title>
      <TechStack />
    </div>
  );
}

export default Summary;
