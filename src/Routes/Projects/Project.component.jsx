import React from "react";

import "./Project.styles.css";

import "swiper/css";
import ProjectSection from "../../Components/Homepage/ProjectsSection/ProjectSection.component";
import ParallaxProjects from "../../Components/ParallaxProjects/ParallaxProjects.component";
import ProjectContainerGrid from "../../Components/ProjectContainerGrid/ProjectContainerGrid.component";

export default function Project() {
  return (
    <>
      <ParallaxProjects />
      {/* <ProjectSection /> */}
    </>
  );
}
