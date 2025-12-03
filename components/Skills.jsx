'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { node as nodejs, typescript, react, reactnative as reactNative, nextjsIcon as nextJs, MongoDB as mongodb, firebase, postgres, Supabase as supabase, express, mysql as mySql, Tailwind as tailwind, cpp, java, javascript, git, aws, terraform, ansible, kubernetes as kubernetest, docker, actions, azure } from '../assets/icons';

const devSKills = {
  categories: [
    {
      title: 'Frontend Dev\'t With',
      skills: [
        { name: 'React', icon: react },
        { name: 'Next.js', icon: nextJs },
        { name: 'React Native', icon: react },
        { name: 'TypeScript', icon: typescript },
        { name: 'Tailwind', icon: tailwind },
      ],
    },
    {
      title: 'Backend Dev\'t With',
      skills: [
        { name: 'Node.js', icon: nodejs },
        { name: 'Express', icon: express },
        { name: 'MongoDB', icon: mongodb },
        { name: 'MySQL', icon: mySql },
        { name: 'Firebase', icon: firebase },
        { name: 'Postgres', icon: postgres },
      ],
    },
    {
      title: 'DevOps',
      skills: [
        { name: 'Docker', icon: docker },
        { name: 'AWS', icon: aws },
        { name: 'Github Actions', icon: actions },
        { name: 'Kubernetes', icon: kubernetest },
        // { name: 'Azure', icon: azure },
        { name: 'Ansible', icon: ansible },
        { name: 'Terraform', icon: terraform },
      ],
    },
  ],
};

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="bg-transparent pt-52"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-1">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-12 md:mb-16">
          Technical Skills
        </h1>

        <div className="lg:ml-20 grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
          {devSKills.categories.map((category, index) => (
            <div
              key={index}
              // className="px-2"
              className={`hover:cursor-pointer ${index === 0 ? 'lg:-ml-20' :
                  index === 1 ? 'lg:-ml-20 lg:mt-10' : ''
                } ${index === 2 ? 'lg:-ml-20 lg:mr-10 lg:mt-20' : ''}`}

            >
              <div
                className="min-w-96 bg-card text-card-foreground rounded-3xl p-4 md:p-6 flex flex-col border-2 border-border hover:scale-[1.02] transition-transform transform duration-300"
                style={{ height: '400px' }}
              >
                <h3 className="text-2xl font-semibold mb-3 md:mb-4 text-center">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-3 md:gap-4 flex-grow">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-3"
                    >
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={24}
                        height={24}
                        className="sm:w-[30px] sm:h-[30px]"
                      />
                      <p className="font-medium text-[14px] md:text-[16px] cursor-default">
                        {skill.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}