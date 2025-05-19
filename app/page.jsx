'use client';

import React, { useEffect, useRef, useState } from 'react';
import Landing from "../components/landing";
import AboutMe from "../components/about";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contact from "../components/contact";

const Page = () => {
    const [currentSectionId, setCurrentSectionId] = useState(0);
    const sections = ["landing", "about", "skills", "projects", "contact"];

    return (
        <div>
            <Landing currentSectionId={currentSectionId} setCurrentSectionId={setCurrentSectionId}/>
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
};

export default Page;
