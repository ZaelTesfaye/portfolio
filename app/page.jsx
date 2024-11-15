'use client'

import React, {useEffect} from 'react';
import Landing from "../components/landing";
import AboutMe from "../components/about";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contact from "../components/contact";

const Page = () => {
    useEffect(() => {
        const parent = document.querySelector('.snap-container');
        const scrollYPerView = parent.clientHeight; // Scroll height per snap

        const onWheel = (event) => {
            event.preventDefault();

            // Check scroll direction and scroll accordingly
            if (event.deltaY > 0) {
                scrollDown();
            } else {
                scrollUp();
            }
        };

        const scrollUp = () => {
            const currentScrollY = parent.scrollTop;
            parent.scroll({
                top: currentScrollY - scrollYPerView,
                left: 0,
                behavior: 'smooth',
            });
        };

        const scrollDown = () => {
            const currentScrollY = parent.scrollTop;
            parent.scroll({
                top: currentScrollY + scrollYPerView,
                left: 0,
                behavior: 'smooth',
            });
        };

        // Attach the event listener to handle mouse wheel scroll
        parent.addEventListener('wheel', onWheel, { passive: false });

        // Cleanup event listener on component unmount
        return () => {
            parent.removeEventListener('wheel', onWheel);
        };
    }, []);

    return (
        <div>
            <div className="snap-y snap-mandatory h-screen overflow-y-scroll snap-container">
                <Landing />
                <AboutMe />
                <Skills />
                <Projects /> {/*contact component inside projects for snap screen purpose*/}
            </div>
        </div>
    );
};

export default Page;
