import React from 'react';
import {Button} from "./ui/button";

const NavBar = ({currentSectionId, setCurrentSectionId}) => {
    const sections = ["landing", "about", "skills", "projects", "contact"];

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start', // Scroll to the top of the element
            });
        }
        const sectionIndex = sections.findIndex((section, index) => section===id);
        setCurrentSectionId(sectionIndex);
    };


    return (
        <header
            className="flex flex-col sm:flex-row justify-between items-center w-full sm:w-11/12 px-2 sm:pl-8 md:pl-24 py-4 sm:py-8 z-10 fixed top-0 left-0 right-0 bg-white shadow-md">
            <Button variant={"outline"} onClick={() => scrollToSection("landing")}
                    className="text-lg sm:text-xl md:text-3xl font-semibold mb-2 sm:mb-0">Z.T</Button>
            <nav>
                <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-6 md:space-x-8">
                    <li>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="hover:text-gray-600 font-medium text-[15px] sm:text-[17px]">
                            About
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('skills')}
                                className="hover:text-gray-600 font-medium text-[15px] sm:text-[17px]">
                            Skills
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="hover:text-gray-600 font-medium text-[15px] sm:text-[17px]">
                            Projects
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="hover:text-gray-600 font-medium text-[15px] sm:text-[17px]">
                            Contact
                        </button>
                    </li>
                </ul>
            </nav>
        </header>

    );
};

export default NavBar;