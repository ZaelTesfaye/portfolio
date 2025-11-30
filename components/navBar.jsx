import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";

const NavBar = ({ currentSectionId = 0, setCurrentSectionId = () => {} }) => {
    const router = useRouter();
    const sections = ["landing", "about", "skills", "projects", "contact"];

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        } else {
            // If section not found (e.g., on preview page), navigate to home page with hash
            router.push(`/#${id}`);
        }
        const sectionIndex = sections.findIndex((section, index) => section === id);
        setCurrentSectionId(sectionIndex);
    };


    return (
        <header
            className="flex flex-col sm:flex-row justify-between items-center w-full px-2 sm:px-16 sm:pl-8 md:pl-24 py-4 sm:py-8 z-10 fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm transition-all duration-300">
            {/* Logo */}
            <div className="flex items-center gap-4 mb-2 sm:mb-0">
                <Button variant={"ghost"} onClick={() => scrollToSection("landing")}
                    className="text-lg sm:text-xl md:text-3xl border-none  font-semibold">Z.T
                </Button>
            </div>
            <nav className="flex items-center gap-5">
                <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-6 md:space-x-8 items-center">
                    <li>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="hover:text-primary font-medium text-[15px] sm:text-[17px] transition-colors">
                            About
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('skills')}
                            className="hover:text-primary font-medium text-[15px] sm:text-[17px] transition-colors">
                            Skills
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="hover:text-primary font-medium text-[15px] sm:text-[17px] transition-colors">
                            Projects
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="hover:text-primary font-medium text-[15px] sm:text-[17px] transition-colors">
                            Contact
                        </button>
                    </li>
                </ul>
                <div className="flex items-center">
                    <ThemeToggle />
                </div>
            </nav>
        </header>

    );
};

export default NavBar;