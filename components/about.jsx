'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, GraduationCap } from 'lucide-react';
import profilePicture from '../assets/images/profile-pic.jpg';

export default function AboutMe() {
    return (
        <motion.section
            id="about"
            className="bg-background px-4 md:px-8  mt-44 sm:mt-52"
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="max-w-5xl mx-auto">

                <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-12">
                    About Me
                </h1>


                <div className="flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-16">

                    <div className="relative w-48  h-48 sm:w-56 sm:h-56 lg:w-80 lg:h-80 flex items-center justify-center overflow-hidden">
                        <Image
                        src={profilePicture}
                        alt="Name"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                        objectPosition="top center" 
                        unoptimized
                    />
                    </div>

                    <div className="md:w-2/3 flex flex-col items-center text-center md:items-start md:text-left">
                        <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                            Aspiring developer with experience in building web applications and backend systems
                            using technologies: React, Next JS, Node.js SQL & MongoDb. High commitment to learning.
                            Eager to contribute to existing & new projects with ability to work with minimal supervision.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* Experience */}
                            <div className="flex-1 p-4 border rounded-xl text-center transition-transform transform hover:scale-105">
                                <Award className="mx-auto mb-2" size={24} />
                                <h3 className="font-bold mb-1">Experience</h3>
                                <p className="text-muted-foreground text-sm sm:text-base">1 year + in Web Development</p>
                            </div>

                            {/* Education */}
                            <div className="flex-1 p-4 border rounded-xl text-center transition-transform transform hover:scale-105">
                                <GraduationCap className="mx-auto mb-2" size={24} />
                                <h3 className="font-bold mb-1">Education</h3>
                                <p className="text-muted-foreground text-sm sm:text-base">
                                    Attending B.SC in Software Engineering at AASTU (3rd Year)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
