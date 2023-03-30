import React from "react";

import "./Project.styles.css";

import "swiper/css";
import ProjectSection from "../../Components/Homepage/ProjectsSection/ProjectSection.component";

export default function Project() {
  return (
    <>
      <ProjectSection />
      <div className="container">
        <div className="title-box">
          <h1 className="title">More Projects</h1>
          <p>
            Through a diverse range of projects, I have gained extensive
            experience in front-end development using tools such as React,
            Next.js, TypeScript, and third-party libraries like Material UI and
            Tailwind CSS. I've built applications ranging from a notes web app
            to interactive games like chess and tic-tac-toe. Additionally, I've
            tackled larger-scale projects like the Mapty project and the Forkify
            project. These experiences have allowed me to hone my
            problem-solving skills and develop a strong eye for detail. Working
            on projects like a bank app has taught me to prioritize security and
            scalability in my code. Overall, I am always eager to take on new
            challenges and continue growing as a developer.
          </p>
          <a
            className="project_githubIcon"
            href="https://github.com/pranaydwivedi444"
            target={"_blank"}
          >
            <img src="https://img.icons8.com/material-rounded/48/null/github.png" />
          </a>
        </div>
        <div className="gallery">
          <div
            className="pictures container-1 row-2"
            style={{
              backgroundImage:
                "url(https://user-images.githubusercontent.com/48515987/228820751-c28d5a38-ca2a-47d4-b28c-42fbd1abf076.png)",
            }}
          >
            <p className="images-title">Budget Tracker</p>
          </div>
          <div
            className="pictures container-2 col-2"
            style={{
              backgroundImage:
                "url(https://user-images.githubusercontent.com/48515987/227156990-5e3e2288-344b-4cfe-9a96-53eeb77466de.png)",
            }}
          >
            <p className="images-title">Notes App</p>
          </div>
          <div
            className="pictures container-3"
            style={{
              backgroundImage:
                "url(https://user-images.githubusercontent.com/48515987/221422028-454e8448-d5f6-428b-82f0-ef5872f22ac8.png)",
            }}
          >
            <p className="images-title">BANK APP</p>
          </div>
          <div
            className="pictures row-2 container-4"
            style={{
              backgroundImage:
                "url(https://user-images.githubusercontent.com/48515987/228822879-fced1313-093e-42c0-8f20-d995fb15a48a.png)",
            }}
          >
            <p className="images-title">My Portfolio</p>
          </div>
          <div
            className="pictures row-2 container-5"
            style={{
              backgroundImage:
                "url(https://user-images.githubusercontent.com/48515987/221224525-bb3f1ae2-4a52-4dc8-9b61-90f808478280.gif)",
            }}
          >
            <p className="images-title">TIC TAC TOE</p>
          </div>
          <div
            className="pictures container-6"
            style={{
              backgroundImage:
                "url(https://user-images.githubusercontent.com/48515987/228823854-b5392aee-4751-4403-870c-9a4088914f8e.png)",
            }}
          >
            <p className="images-title">12 Language Dictionary App</p>
          </div>
          <div
            className="pictures col-2 container-7"
            style={{
              backgroundImage:
                "url(https://user-images.githubusercontent.com/48515987/221229823-18aa21dd-2968-4122-820f-ff83661fc08f.png)",
            }}
          >
            <p className="images-title">Mapty Workout App</p>
          </div>
        </div>
      </div>
    </>
  );
}
