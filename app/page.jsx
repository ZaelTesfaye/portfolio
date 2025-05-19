'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Landing from "../components/landing";
import AboutMe from "../components/about";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contact from "../components/contact";
import debounce from "../utils/debounce";

const Page = () => {
    const containerRef = useRef(null);
    const [currentSectionId, setCurrentSectionId] = useState(0);
    const sections = ["landing", "about", "skills", "projects", "contact"];
    const [isScrolling, setIsScrolling] = useState(false); // Track scrolling state

    const scrollToSection = (index) => {
        if (isScrolling || index < 0 || index >= sections.length) return;

        const section = document.getElementById(sections[index]);
        if (section) {
            setIsScrolling(true);
            section.scrollIntoView({ behavior: 'smooth' });

            setTimeout(() => {
                setIsScrolling(false);
                setCurrentSectionId(index);
            }, 700); // Matches smooth scroll duration
        }
    };

    // Use callback to prevent unnecessary re-creations of the debounced function
    const handleScroll = useCallback(
        debounce((deltaY) => {
            if (isScrolling) return;

            if (deltaY > 0 && currentSectionId < sections.length - 1) {
                scrollToSection(currentSectionId + 1);
            } else if (deltaY < 0 && currentSectionId > 0) {
                scrollToSection(currentSectionId - 1);
            }
        }, 250), // Increased debounce time for better smoothness
        [isScrolling, currentSectionId]
    );

    useEffect(() => {
        const parent = containerRef.current;
        if (!parent) return;

        // Declare scroll and touch event handlers
        const onWheel = (event) => {
            event.preventDefault(); // Prevent default browser scrolling
            handleScroll(event.deltaY);
        };

        const onTouchStart = (event) => {
            parent.startY = event.touches[0].clientY; // Record initial touch position
        };

        const onTouchMove = (event) => {
            if (!parent.startY) return;

            const deltaY = parent.startY - event.touches[0].clientY;
            handleScroll(deltaY);
        };

        // Add event listeners
        parent.addEventListener('wheel', onWheel, { passive: false });
        parent.addEventListener('touchstart', onTouchStart, { passive: true });
        parent.addEventListener('touchmove', onTouchMove, { passive: false });

        // Cleanup event listeners on component unmount
        return () => {
            parent.removeEventListener('wheel', onWheel);
            parent.removeEventListener('touchstart', onTouchStart);
            parent.removeEventListener('touchmove', onTouchMove);
        };
    }, [handleScroll]);

    return (
        <div>
            <div
                ref={containerRef}
                className="h-auto min-h-screen overflow-y-auto"
            >
                <Landing currentSectionId={currentSectionId} setCurrentSectionId={setCurrentSectionId}/>
                <AboutMe />
                <Skills />
                <Projects />
                <Contact />
            </div>
        </div>
    );
};

export default Page;
