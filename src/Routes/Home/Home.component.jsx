import React from "react";
import { Outlet } from "react-router-dom";
import Contact from "../../Components/Contact/Contact.component";
import Experience from "../../Components/Homepage/Experience/Experience.component";
import Hero from "../../Components/Homepage/Hero/Hero.component";
import Project from "../../Components/Homepage/ProjectsSection/ProjectSection.component";
import Summary from "../../Components/Homepage/Summary/Summary.component";
import "./Home.styles.css";

export default function Home() {
  return (
    <div className="home__container">
      <div className="home__stars home__parallax">
        <div className="home__star1"></div>
        <div className="home__star2"></div>
        <div className="home__star3"></div>
        <div className="home__star4"></div>
        <div className="home__star5"></div>
      </div>
      <Hero />
      <Summary />
      <Project />
      <Experience />
      <Contact />
    </div>
  );
}

