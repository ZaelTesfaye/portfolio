import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "./ui/button.tsx";
import { ThemeToggle } from "./ThemeToggle.jsx";

const NavBar = ({ currentSectionId = 0, setCurrentSectionId = () => { } }) => {
    const router = useRouter();
    const sections = ["landing", "about", "skills", "experience", "projects", "contact"];

    const navItems = [
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Experience', id: 'experience' },
        { name: 'Projects', id: 'projects' },
        { name: 'Contact', id: 'contact' },
    ];

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
            className="flex flex-col sm:flex-row justify-between items-center w-full px-4 sm:px-16 sm:pl-8 md:pl-24 py-2 sm:py-4 z-10 fixed top-0 left-0 right-0 bg-transparent backdrop-blur-sm border-b border-border/40 shadow-lg transition-all duration-300">
            
            {/* Top bar for mobile, or just logo for desktop */}
            <div className="w-full flex justify-center items-center sm:w-auto mb-2 sm:mb-0">
                {/* Logo */}
                <div className="flex items-center gap-4">
                    <Button variant={"ghost"} onClick={() => scrollToSection("landing")}
                        className="text-lg sm:text-xl md:text-3xl border-none font-semibold">Z.T
                    </Button>
                </div>
            </div>

            {/* Navigation */}
            <nav className="w-full sm:w-auto flex items-center gap-5">
                <ul className="w-full sm:w-auto flex flex-wrap justify-center space-x-6 sm:space-x-6 md:space-x-8 items-center">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <button
                                onClick={() => scrollToSection(item.id)}
                                className="py-2 sm:py-4 hover:text-primary font-medium text-[14px] sm:text-[16px] transition-colors">
                                {item.name}
                            </button>
                        </li>
                    ))}
                </ul>
                {/* Desktop Theme Toggle */}
                <div className="hidden sm:flex items-center">
                    <ThemeToggle />
                </div>
            </nav>
            {/* Mobile Theme Toggle */}
            <div className="absolute top-2 right-4 sm:hidden">
                <ThemeToggle />
            </div>
        </header>                
    );
};

export default NavBar;