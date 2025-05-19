'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from './ui/button';
import { Github, Linkedin } from 'lucide-react';
import profilePicture from '../assets/images/profile-pic.jpg';
import NavBar from './navBar';

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
            className="pt-2 bg-white mb-24 sm:mb-32 h-auto min-h-screen flex flex-col justify-center"
        >
            <NavBar currentSectionId={currentSectionId} setCurrentSectionId={setCurrentSectionId} />
            <motion.main
                className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12 p-4 sm:p-8 md:p-24 mt-16 sm:mt-24 flex-1 w-full"
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
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                        objectPosition="top center"
                        unoptimized
                    />
                </motion.div>
                <motion.div
                    className="text-center md:text-left space-y-2 sm:space-y-4"
                    variants={childVariants}
                >
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">Zeal Tesfaye</h2>
                    <p className="text-lg sm:text-2xl md:text-3xl text-gray-600">Full-stack Developer</p>
                    <div className="flex justify-center md:justify-start space-x-2 sm:space-x-4">
                        <Button className="hover:scale-110 text-xs sm:text-base" variant="outline">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://drive.google.com/file/d/1gPpfSuZGR3h1rfAagmxNO--lNb4emWSD/view?usp=sharing"
                            >
                                View CV
                            </a>
                        </Button>
                        <Button
                            className="hover:scale-105 text-xs sm:text-base"
                            onClick={() => scrollToSection('contact')}
                        >
                            Contact
                        </Button>
                    </div>
                    {/* <div className="flex justify-center md:justify-start space-x-3 sm:space-x-4 pt-2 pl-2 sm:pl-6">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/ZealTesfaye/"
                            className="text-gray-600 hover:text-[#24a9eb]"
                        >
                            <Linkedin size={22} />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/ZaelTesfaye"
                            className="text-gray-600 hover:text-blue-800"
                        >
                            <Github size={22} />
                            <span className="sr-only">GitHub</span>
                        </a>
                    </div> */}
                </motion.div>
            </motion.main>
        </div>
    );
}