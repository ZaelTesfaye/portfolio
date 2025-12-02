'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../constants/experience';
import { MapPin, Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="pt-44 py-6 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.h1
                    className="text-3xl md:text-4xl font-bold text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Experience
                </motion.h1>

                <div className="relative max-w-6xl mx-auto">
                    {/* Central Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-border transform md:-translate-x-1/2" />

                    <div className="flex flex-col gap-12">
                        {experience.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                {/* Spacer for Desktop Balance */}
                                <div className="hidden md:block md:w-1/2" />

                                {/* Dot on the timeline */}
                                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 mt-6" />

                                {/* Horizontal Branch Connector (Desktop only) */}
                                <div className={`hidden md:block absolute top-8 h-0.5 bg-gray-300 dark:bg-border w-12 ${index % 2 === 0 ? 'left-[calc(50%-3rem)]' : 'left-[50%]'}`} />

                                {/* Content Card */}
                                <div className="w-full md:w-1/2 ml-12 md:ml-0">
                                    <div className={`relative bg-card text-card-foreground p-6 rounded-2xl border border-gray-300 dark:border-border hover:shadow-lg hover:scale-[1.015] hover:cursor-pointer transition-all duration-500 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>

                                        {/* Date Badge */}
                                        <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
                                            {item.date}
                                        </div>

                                        <h3 className="text-xl font-bold mb-1">{item.role}</h3>

                                        <div className="flex items-center gap-2 text-muted-foreground mb-4 text-sm">
                                            {item?.company && 
                                            <>
                                            <Briefcase className="w-4 h-4" />
                                            <span>{item.company}</span>
                                            </>
                                            }

                                                       {item?.location && 
                                            <>
                     
                                            <span className="mx-1">•</span>
                                            <MapPin className="w-4 h-4" />
                                            <span>{item.location}</span>
                                            </>
                                            }

                                        </div>

                                        <ul className="space-y-2">
                                            {item.description.map((desc, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                                    <span>{desc}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
