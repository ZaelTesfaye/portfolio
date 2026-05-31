'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, X } from 'lucide-react';
import { profilePicture } from '../assets/images';
import { Button } from './ui';
import NavBar from "./NavBar.jsx";

export default function Landing({ currentSectionId, setCurrentSectionId }) {
    const [isCvModalOpen, setIsCvModalOpen] = useState(false);
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

    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsCvModalOpen(false);
            }
        };

        if (isCvModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        window.addEventListener('keydown', onKeyDown);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isCvModalOpen]);

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
                        priority
                        placeholder="blur"
                        style={{ objectFit: 'cover', objectPosition: 'top center' }}
                        className="rounded-full"
                    />
                </motion.div>
                <motion.div
                    className="text-center md:text-left space-y-4 sm:space-y-4"
                    variants={childVariants}
                >
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">Zeal Tesfaye</h2>
                    <p className="text-lg sm:text-2xl md:text-3xl text-muted-foreground">Full-Stack Software Engineer</p>
                    <div className="flex justify-center md:justify-start space-x-2 sm:space-x-4">
                        <Button
                            className="hover:scale-110 text-xs sm:text-base transition-transform duration-500"
                            variant="outline"
                            onClick={() => setIsCvModalOpen(true)}
                        >
                            View CV
                        </Button>
                        <Button
                            className="hover:scale-105 text-xs sm:text-base transition-transform duration-500"
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
                            className="text-muted-foreground hover:text-[#24a9eb] transition-all duration-300"
                        >
                            <Linkedin size={22} />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/ZaelTesfaye"
                            className="text-muted-foreground hover:text-blue-800 transition-all duration-300"
                        >
                            <Github size={22} />
                            <span className="sr-only">GitHub</span>
                        </a>
                    </div>
                </motion.div>
            </motion.main>

            {isCvModalOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-3 sm:px-6"
                    onClick={() => setIsCvModalOpen(false)}
                >
                    <div
                        className="w-full max-w-5xl h-[85vh] bg-card border border-border rounded-xl shadow-2xl flex flex-col overflow-hidden"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="flex items-center justify-between border-b border-border px-4 py-3">
                            <h3 className="font-semibold text-sm sm:text-base">Zeal Tesfaye CV</h3>
                            <div className="flex items-center gap-2">
                                <Button asChild size="sm" variant="outline">
                                    <a href="/_Zeal_Tesfaye.pdf" download>
                                        <Download className="w-4 h-4" />
                                        Download
                                    </a>
                                </Button>
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    aria-label="Close CV modal"
                                    onClick={() => setIsCvModalOpen(false)}
                                >
                                    <X className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>

                        <div className="flex-1 bg-background">
                            <iframe
                                title="Zeal Tesfaye CV"
                                src="/_Zeal_Tesfaye.pdf"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}