'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { profilePicture } from '../assets/images';
import { Button } from './ui';
import NavBar from "./navBar.jsx";

export default function Landing({ currentSectionId, setCurrentSectionId }) {
    const sections = ['landing', 'about', 'skills', 'projects', 'contact'];
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        const sectionIndex = sections.findIndex((section) => section === id);
        setCurrentSectionId(sectionIndex);
    };

    // Container animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger child animations
                delayChildren: 0.3, // Delay before children start animating
            },
        },
    };

    // Child animation variants (for image and text)
    const childVariants = {
        hidden: { opacity: 0, scale: 0.8 }, // Start smaller and transparent
        visible: {
            opacity: 1,
            scale: 1, // Scale to normal size
            transition: {
                duration: 1,
                ease: 'easeOut',
            },
        },
    };

    return (
        <div
            id="landing"
            className="pt-2 bg-transparent h-auto min-h-screen flex flex-col justify-center"
        >
            <NavBar currentSectionId={currentSectionId} setCurrentSectionId={setCurrentSectionId} />
            <motion.main
                className="flex flex-col md:flex-row items-center justify-center w-full px-4 sm:px-8 md:px-12 gap-8 md:gap-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the element is in view
            >
                <motion.div
                    className="w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 relative"
                    variants={childVariants}
                >
                    <Image
                        src={profilePicture}
                        alt="Zeal Tesfaye"
                        fill={true}
                        style={{ objectFit: 'cover', objectPosition: 'top center' }}
                        className="rounded-full"
                        unoptimized
                    />
                </motion.div>
                <motion.div
                    className="text-center md:text-left space-y-2 sm:space-y-4"
                    variants={childVariants}
                >
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">Zeal Tesfaye</h2>
                    <p className="text-lg sm:text-2xl md:text-3xl text-muted-foreground">Full-stack Developer</p>
                    <div className="flex justify-center md:justify-start space-x-2 sm:space-x-4">
                        <Button className="hover:scale-110 text-xs sm:text-base transition-transform duration-300" variant="outline">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://drive.google.com/file/d/1eSQdb_qEKOoShHf2ffAre5BeQKJGmCBx/view?usp=sharing"
                            >
                                View CV
                            </a>
                        </Button>
                        <Button
                            className="hover:scale-105 text-xs sm:text-base transition-transform duration-300"
                            onClick={() => scrollToSection('contact')}
                        >
                            Contact
                        </Button>
                    </div>
                    <div className="flex justify-center md:justify-start space-x-3 sm:space-x-4 pt-2 pl-2 sm:pl-6">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/ZealTesfaye/"
                            className="text-muted-foreground hover:text-[#24a9eb] transition-transform duration-300"
                        >
                            <Linkedin size={22} />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/ZaelTesfaye"
                            className="text-muted-foreground hover:text-blue-800 transition-colors"
                        >
                            <Github size={22} />
                            <span className="sr-only">GitHub</span>
                        </a>
                    </div>
                </motion.div>
            </motion.main>
        </div>
    );
}