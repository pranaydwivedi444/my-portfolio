import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./ParallaxProjects.styles.css";
import firstPage from "./../../Assets/first.png";
import crypto from "./../../Assets/crypto.png";
import ecommerce from "./../../Assets/ecommerce.png";
import chess from "./../../Assets/chess.png";
import airbnb from "./../../Assets/airbnb.png";
import recipe from "./../../Assets/recipe.png";
import cat from "./../../Assets/cat.gif";
import ProjectContainerGrid from "../ProjectContainerGrid/ProjectContainerGrid.component";
const projects = [
  {
    id: 1,
    image: crypto,
    title: "Cryptocurrency Dashboard",
    subtitle: "React, Context API ,CryptoCompare API , charts",
    liveLink: "http://",
    githubLink: "http://",
    offset: 1,
    speed: 0.4,
  },
  {
    id: 2,
    image: ecommerce,
    title: "CRWN ECOMMERCE",
    subtitle: "STRIPE API , FIREBASE AUTH , REACT JS",
    liveLink: "https://crwn-clothing-ecommerce-store.netlify.app/",
    githubLink: "https://github.com/pranaydwivedi444/crwn-shopping-web--app",
    offset: 2,
    speed: 0.2,
  },
  {
    id: 3,
    image: recipe,
    title: "Forkify",
    subtitle: "VANILLA JS , FOOD2FORK API",
    liveLink: "https://forkify-project-recipe.netlify.app/",
    githubLink: "https://github.com/pranaydwivedi444/Forkify",
    offset: 3,
    speed: 0.4,
  },
  {
    id: 4,
    image: chess,
    title: "Chess Game",
    subtitle: "Next JS TypeScript",
    liveLink: "http://",
    githubLink: "http://",
    offset: 4,
    speed: 0.3,
  },
  {
    id: 5,
    image: airbnb,
    title: "Airbnb Clone",
    subtitle: "Next JS Tailwind css mapbox",
    liveLink: "http://",
    githubLink: "http://",
    offset: 5,
    speed: 0.4,
  },
];
function ParallaxProjects() {
  const ref = useRef();

  return (
    <div className="ParallaxProject__container">
      <Parallax pages={7} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={0.3}
          // factor={1}
          style={{
            backgroundImage: `url(${firstPage})`,
            backgroundSize: "100vw 100vh",
            backgroundPosition: "center",
            // height: "100vh",
            // width: "100vw",
          }}
        >
          <div className="ParallaxProject__titlebox">
            <h1 className="ParallaxProject_heading">Projects Section</h1>
            <h6 className="ParallaxProject_subs">Scroll to view</h6>

            <a href="https://github.com/pranaydwivedi444" target={"_blank"}>
              Github
            </a>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.3, end: 5 }}
          style={{ width: "fit-content" }}
        >
          <img src={cat} className="ParallaxProject__cat" alt="catgif" />
        </ParallaxLayer>
        {projects.map((project) => {
          return (
            <ParallaxLayer
              key={project.id}
              offset={project.offset}
              speed={project.speed}
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: "100vw 100vh",
                backgroundPosition: "center",
              }}
            >
              <div className="ParallaxProject__titlebox">
                <h1 className="ParallaxProject_heading">{project.title}</h1>
                <h6 className="ParallaxProject_subs">{project.subtitle}</h6>
                <a href={project.liveLink} target={"_blank"}>
                  live site
                </a>
                <a href={project.githubLink} target={"_blank"}>
                  Github
                </a>
              </div>
            </ParallaxLayer>
          );
        })}
        <ParallaxLayer offset={6} speed={0.4}>
          <ProjectContainerGrid />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default ParallaxProjects;
