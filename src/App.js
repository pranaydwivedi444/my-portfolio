import React from "react";
import Home from "./Routes/Home/Home.component";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Routes/navbar/navbar.component.jsx";
import Project from "./Routes/Projects/Project.component";
import Podcast from "./Routes/Podcast/Podcast.component";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/podcast" element={<Podcast />} />
      </Route>
    </Routes>
  );
}
