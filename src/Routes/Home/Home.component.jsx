import React from "react";
import { Outlet } from "react-router-dom";
import Contact from "../../Components/Contact/Contact.component";
import Experience from "../../Components/Homepage/Experience/Experience.component";
import Hero from "../../Components/Homepage/Hero/Hero.component";
import Project from "../../Components/Homepage/Projects/Project.component";
import Summary from "../../Components/Homepage/Summary/Summary.component";
import "./Home.styles.css";

export default function Home() {
  return (
    <div className="home__container">
      <Hero />
      <Summary />
      <Project />
      <Experience />
      <Contact />
    </div>
  );
}
