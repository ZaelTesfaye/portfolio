'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, GraduationCap } from 'lucide-react';
import profilePicture from '../assets/images/profile-pic.jpg';

export default function AboutMe() {
    return (
        <motion.section
            id="about"
            className="bg-white px-4 md:px-8 pt-32 pb-24 snap-start h-screen overflow-y-scroll hide-scrollbar"
            initial={{ opacity: 0, y: 100 }} // Start hidden and below the viewport
            whileInView={{ opacity: 1, y: 0 }} // Slide up and fade in when in view
            transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
            viewport={{ once: true, amount: 0.2 }} // Trigger animation once when 20% of the section is in view
        >
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8 md:mb-12 md:mr-20">About Me</h1>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24">
                    <div className="w-32 h-32 md:w-1/3 flex items-center justify-center">
                        <Image
                            src={profilePicture}
                            alt="Profile"
                            width={450}
                            height={450}
                            className="rounded-3xl"
                            unoptimized
                        />
                    </div>

                    <div className="md:w-2/3 flex flex-col justify-center items-center">
                        <p className="text-gray-700 leading-relaxed">
                            Aspiring software developer with hands-on experience in building web applications and backend systems
                            using technologies: React, Next JS, React Native, Node.js, MongoDB & MySQL. High commitment to learning.
                            Eager to contribute to existing &
                            new projects with ability to understand and work with minimal supervision.
                        </p>
                        <div className="flex flex-col md:flex-row md:gap-4 md:mt-6">
                            <div className="flex-1 p-3 md:p-6 border rounded-xl text-center hover:scale-105">
                                <Award className="mx-auto md:mb-2" size={24} />
                                <h3 className="font-bold mb-1 cursor-default">Experience</h3>
                                <p className="text-gray-600 whitespace-nowrap  cursor-default">~1 year in Web Development</p>
                            </div>
                            <div className="flex-1  p-3 md:p-6 border rounded-xl text-center hover:scale-105">
                                <GraduationCap className="mx-auto md:mb-2" size={24} />
                                <h3 className="font-bold mb-1 cursor-default">Education</h3>
                                <p className="text-gray-600 cursor-default">Attending B.A. in Software Engineering at Addis Ababa Science & Technology University</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
