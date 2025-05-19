'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import nodejs from '../assets/images/node.png';
import typescript from '../assets/images/typescript.png';
import react from '../assets/images/react.png';
import reactNative from '../assets/images/reactnative.png';
import nextJs from '../assets/images/nextjs-icon.png';
import mongodb from '../assets/images/MongoDB.png';
import firebaseIcon from '../assets/images/firebase.png';
import postgres from '../assets/images/postgres.png';
import supabase from '../assets/images/Supabase.png';
import express from '../assets/images/express.png';
import mySql from '../assets/images/mysql.png';
import tailwind from '../assets/images/Tailwind.png';
import cpp from '../assets/images/cpp.png';
import java from '../assets/images/java.png';
import javascript from '../assets/images/javascript.png';
import git from '../assets/images/git.png';
import docker from '../assets/images/docker.png';
import azure from '../assets/images/azure.png';
import firebase from "../assets/images/firebase.png"

const devSKills = {
  categories: [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React', icon: react },
        { name: 'Next.js', icon: nextJs },
        { name: 'React Native', icon: reactNative },
        { name: 'TypeScript', icon: typescript },
        { name: 'Tailwind', icon: tailwind },
      ],
    },
    {
      title: 'Backend Technologies',
      skills: [
        { name: 'Node.js', icon: nodejs },
        { name: 'Express', icon: express },
        { name: 'MongoDB', icon: mongodb },
        { name: 'MySQL', icon: mySql },
        { name: 'Firebase', icon: firebaseIcon },
        { name: 'Postgres', icon: postgres },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'git', icon: git },
        { name: 'Firebase', icon: firebase },
        { name: 'Docker', icon: docker },
        { name: 'Azure', icon: azure },
      ],
    },
  ],
};

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="bg-white pt-24 snap-start hide-scrollbar h-screen"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: -150 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Skills
        </h1>

        <Carousel opts={{ align: 'start' }} className="w-full relative" style={{ overflow: 'visible' }}>
          <CarouselContent className="px-2 md:px-6 pt-4">
            {devSKills.categories.map((category, index) => (
              <CarouselItem
                key={index}
                className="min-w-full sm:min-w-32 sm:basis-full md:basis-1/2 lg:basis-1/3 px-2 transform transition-transform duration-500"
              >
                <div
                  className="min-w-full sm:min-w-64 bg-gray-100 rounded-3xl p-4 md:p-6 flex flex-col border-2 border-gray-400 hover:scale-[1.02]"
                  style={{ height: '400px' }}
                >
                  <h3 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4 text-center">
                    {category.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-3 md:gap-4 flex-grow">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center gap-2 md:gap-3 hover:scale-105 transition-transform"
                      >
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={24}
                          height={24}
                          className="md:w-[30px] md:h-[30px]"
                        />
                        <p className="font-medium text-[14px] md:text-[16px] cursor-default">
                          {skill.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Buttons always visible on small screens */}
          <div className="sm:hidden flex justify-between absolute top-1/2 left-4 right-4 z-30 -translate-y-1/2 pointer-events-auto">
            <CarouselPrevious className="bg-blue-500 text-white hover:bg-blue-600 border-none shadow-md pointer-events-auto min-w-10 min-h-10 w-10 h-10 rounded-full flex items-center justify-center" />
            <CarouselNext className="bg-blue-500 text-white hover:bg-blue-600 border-none shadow-md pointer-events-auto min-w-10 min-h-10 w-10 h-10 rounded-full flex items-center justify-center" />
          </div>

          {/* Default buttons for larger screens */}
          <CarouselPrevious className="hidden sm:flex bg-blue-500 text-white hover:bg-blue-600 border-none shadow-md min-w-12 min-h-12 w-12 h-12 rounded-full" />
          <CarouselNext className="hidden sm:flex bg-blue-500 text-white hover:bg-blue-600 border-none shadow-md min-w-12 min-h-12 w-12 h-12 rounded-full" />
        </Carousel>
      </div>
    </motion.section>
  );
}