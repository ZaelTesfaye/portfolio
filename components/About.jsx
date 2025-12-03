'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, GraduationCap, Code } from 'lucide-react';
import { profilePicture } from '../assets/images';

export default function AboutMe() {
    const stats = [
        {
            icon: Award,
            title: "Experience",
            description: "1+ year in Web Development",
            color: "blue"
        },
        {
            icon: GraduationCap,
            title: "Education",
            description: "B.SC in Software Engineering",
            color: "blue"
        }
    ];

    return (
        <motion.section
            id="about"
            className="bg-transparent px-4 md:px-8 mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
                    About Me
                </h1>

                <div className="flex flex-col md:flex-row justify-center items-center gap-12 lg:gap-24">

                    {/* Image Container */}
                    <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 group">
                        {/* Floating Animation Wrapper */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-full h-full relative"
                        >
                            {/* Background Glow/Blob */}
                            <div
                                className="absolute inset-4 bg-gradient-to-tr from-blue-500/30 to-blue-500/30 rounded-full blur-2xl -z-10"
                            />

                            {/* Main Image Card */}
                            <div className="w-full h-full rounded-full mt-2 md:mt-4 border-[6px] border-background shadow-sm hover:shadow-sm overflow-hidden relative transition-shadow duration-300">
                                <Image
                                    src={profilePicture}
                                    alt="Zeal Tesfaye"
                                    fill={true}
                                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                                    className="grayscale group-hover:grayscale-0 transition-all duration-500 scale-105"
                                    unoptimized
                                />
                                {/* Glass Shine */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />
                            </div>

                            {/* Floating Icons */}
                            <motion.div
                                className="absolute -right-2 top-10 bg-card/90 backdrop-blur-md p-3 rounded-2xl  border border-border/50 flex items-center justify-center z-10"
                                animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                            >
                                <Code className="text-blue-500 w-6 h-6" />
                            </motion.div>

                            <motion.div
                                className="absolute -left-4 bottom-20 bg-card/90 backdrop-blur-md p-3 rounded-2xl  border border-border/50 flex items-center justify-center z-10"
                                animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
                                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                            >
                                <Code className="text-blue-500 w-6 h-6" />
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Text Content */}
                    <div className="md:w-1/2 flex gap-12 flex-col items-center text-center md:items-start md:text-left">
                        <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed ">
                            Full Stack developer with hands-on experience in building web applications and backend systems.
                            Specialized skills on React, Next JS, Node.js/Express, SQL & NoSQL databases and DevOps tools & practices. High commitment to learning.
                            Open to contribute to existing & new projects. Able to work with minimal supervision.
                        </p>

                        <div className="flex flex-col  sm:flex-row gap-4 w-full">
                            {stats.map((stat, index) => (
                                <div
                                    key={index} 
                                    className={`flex-1 mx-2 py-4 hover:cursor-pointer sp-6 border border-border/50 bg-card/50 backdrop-blur-sm rounded-2xl text-center transition-all duration-500 ease-in-out transform-gpu relative hover:z-10 hover:scale-105 hover:border-${stat.color}-500/30 hover:shadow-lg hover:shadow-${stat.color}-500/10`}
                                >
                                    <stat.icon className={`mx-auto mb-3 text-${stat.color}-500`} size={28} />
                                    <h3 className="font-bold mb-1 text-lg">{stat.title}</h3>
                                    <p className="text-muted-foreground text-sm whitespace-pre-line">{stat.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
