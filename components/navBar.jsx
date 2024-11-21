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
                className="flex justify-between items-center w-11/12 pl-8 md:pl-24 py-8 z-10 fixed top-0 left-0 right-0 bg-white shadow-md">
                <Button variant={"outline"} onClick={() => scrollToSection("landing")}
                        className="text-xl md:text-3xl font-semibold">Z.T</Button>
                <nav>
                    <ul className="flex space-x-4 md:space-x-6">
                        <li>
                            <button
                                onClick={() => scrollToSection('about')}
                                className="hover:text-gray-600 font-medium text-[17px]">
                                About
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('skills')}
                                    className="hover:text-gray-600 font-medium text-[17px]">
                                Skills
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="hover:text-gray-600 font-medium text-[17px]">
                                Projects
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="hover:text-gray-600 font-medium text-[17px]">
                                Contact
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>

    );
};

export default NavBar;