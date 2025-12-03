'use client';

export const dynamic = 'force-dynamic';

import React, { useEffect, useRef, useState } from 'react';
import Landing from "../components/Landing.jsx";
import About from "../components/About.jsx";
import Skills from "../components/Skills.jsx";
import Experience from "../components/Experience.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";

const AboutMe = About;

const Page = () => {
    const [currentSectionId, setCurrentSectionId] = useState(0);
    const sections = ["landing", "about", "skills", "experience", "projects", "contact"];

    return (
        <div>
            <Landing currentSectionId={currentSectionId} setCurrentSectionId={setCurrentSectionId} />
            <AboutMe />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
        </div>
    );
};

export default Page;
