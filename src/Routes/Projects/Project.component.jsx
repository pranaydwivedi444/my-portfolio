import React from "react";

import "./Project.styles.css";

import "swiper/css";
import ProjectSection from "../../Components/Homepage/ProjectsSection/ProjectSection.component";
import ParallaxProjects from "../../Components/ParallaxProjects/ParallaxProjects.component";
import ProjectContainerGrid from "../../Components/ProjectContainerGrid/ProjectContainerGrid.component";
import ProjectCard from "../../Components/ProjectCard/ProjectCard.component";
import crypto from "./../../Assets/crypto.png";
import ecommerce from "./../../Assets/ecommerce.png";
import chess from "./../../Assets/chess.png";
import airbnb from "./../../Assets/airbnb.png";
import recipe from "./../../Assets/recipe.png";
import chatAI from "./../../Assets/chatAIBOT.jpg";
import dictionary from "./../../Assets/dictionary.png";

import FilmFeast from "./../../Assets/FilmFeast.png";
export default function Project() {
  const projects = [
    {
      id: 5,
      title: "Samvaad Chat ",
      description:
        "Samvad is a real-time group chat  with 3 AI bots  integrated,The AI bots enhance the user experience to discuss , get best results",
      image: chatAI,
      codeLink:
        "https://github.com/pranaydwivedi444/Chess-Game/tree/main/chess",
      liveLink:
        "https://github.com/pranaydwivedi444/Chess-Game/tree/main/chess",
    },
    {
      id: 8,
      title: "Film Feast Movie Web App ",
      description:
        "movie search app is designed to provide a seamless movie search experience for users. Built with React, the app allows users to search for movies by category and save their favorite films to a personalized list. ",
      image: FilmFeast,
      codeLink:
        "https://github.com/pranaydwivedi444/Chess-Game/tree/main/chess",
      liveLink:
        "https://github.com/pranaydwivedi444/Chess-Game/tree/main/chess",
    },
    {
      id: 6,
      title: "DICTIONARY APP ",
      description:
        "The Dictionary Progressive web app  supports 12 different languages, search for the meaning of words, with the ability to hear the pronunciation",
      image: dictionary,
      codeLink:
        "https://github.com/pranaydwivedi444/dictionary-app-12Languages",
      liveLink:
        "https://pranaydwivedi444.github.io/dictionary-app-12Languages/",
    },
    {
      id: 7,
      title: "CRYPTO DASHBOARD",
      description:
        "CRYPTO dashboard with settings for selecting favorite coins, fuzzy search, and toggling coins on/off. The dashboard generates prices and historical data, includes a line chart with selectable timeframes, and can be configured with dark or light themes.",
      image: crypto,
      codeLink:
        "https://github.com/pranaydwivedi444/dictionary-app-12Languages",
      liveLink:
        "https://pranaydwivedi444.github.io/dictionary-app-12Languages/",
    },
    {
      id: 1,
      title: "CRWN ECOMMERCE",
      description:
        "This e-commerce website uses React.js, Firebase Authentication, and Stripe payment integration. ",
      image: ecommerce,
      codeLink: "https://github.com/pranaydwivedi444/crwn-shopping-web--app",
      liveLink: "https://crwn-clothing-ecommerce-store.netlify.app/",
    },
    {
      id: 2,
      title: "Forkify",
      description:
        "Forkify is an MVC-based application with search, bookmarking, and custom recipe creation features.",
      image: recipe,
      codeLink: "https://github.com/pranaydwivedi444/Forkify",
      liveLink: "https://forkify-project-recipe.netlify.app/",
    },
    {
      id: 3,
      title: "Chess",
      description:
        "This chess game project has local and online multiplayer modes with real-time communication using Firebase. ",
      image: chess,
      codeLink:
        "https://github.com/pranaydwivedi444/Chess-Game/tree/main/chess",
      liveLink:
        "https://github.com/pranaydwivedi444/Chess-Game/tree/main/chess",
    },
    {
      id: 4,
      title: "AirBnB Clone",
      description:
        "This Airbnb clone project built with Next.js includes a date picker, Tailwind for styling, and Mapbox for map integration.",
      image: airbnb,
      codeLink:
        "https://github.com/pranaydwivedi444/Chess-Game/tree/main/chess",
      liveLink:
        "https://github.com/pranaydwivedi444/Chess-Game/tree/main/chess",
    },
  ];
  return (
    <div className="project__page">
      <div className="project-cards">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            codeLink={project.codeLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
      <ProjectContainerGrid />
    </div>
  );
}
