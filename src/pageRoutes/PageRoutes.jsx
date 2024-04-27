import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from "../pages/home";

import About from "../pages/about";
import Resume from "../pages/about/resume";
import Contact from "../pages/about/contact";

import Projects from "../pages/projects";
import Project1 from "../pages/projects/project1";
import Project2 from "../pages/projects/project2";
import Project2a from "../pages/projects/project2/project2a";
import Project2b from "../pages/projects/project2/project2b";
import Project3 from "../pages/projects/project3";


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />}>
                <Route path="resume" element={<Resume />} />
                <Route path="contact" element={<Contact />} />
            </Route>
            <Route path="/projects" element={<Projects />}>
                <Route path="project1" element={<Project1 />} />
                <Route path="project2" element={<Project2 />}>
                    <Route path="project2a" element={<Project2a />} />
                    <Route path="project2b" element={<Project2b />} />
                </Route>
                <Route path="project3" element={<Project3 />} />
            </Route>
        </Routes>
    )
}

export default Router

