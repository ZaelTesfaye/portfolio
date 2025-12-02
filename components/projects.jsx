
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react';
import projects from '../constants/projects';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <motion.section
      id="projects"
      className="bg-transparent pt-44"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-full flex flex-col gap-4 items-center px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center">Latest Projects</h1>

        <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16 px-2 md:px-6 pt-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="px-2 transform transition-transform duration-500"
            >
              <div
                className="min-w-full sm:min-w-64 bg-card text-card-foreground rounded-3xl p-4 md:p-6 flex flex-col border-2 border-border hover:scale-[1.02] hover:cursor-pointer transition-transform duration-300 shadow-sm hover:shadow-md"
                style={{ height: '650px' }}
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative w-full aspect-square mb-4 rounded-2xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 "
                  />
                </div>
                <h3 className="text-lg md:text-2xl font-semibold mb-2 truncate">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base mb-2 text-muted-foreground line-clamp-3 overflow-hidden flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-4 pt-2 pb-1 mb-4">
                  {project.stack.slice(0, 4).map((tech, index) => (
                    <Image
                      key={index}
                      src={tech.icon}
                      alt={tech.name}
                      className="w-6 h-6 md:w-7 md:h-7"
                    />
                  ))}
                  {project.stack.length > 4 && (
                    <div className="flex items-center justify-center w-6 h-6 md:w-7 md:h-7 bg-muted rounded-full text-xs font-medium text-muted-foreground">
                      +{project.stack.length - 4}
                    </div>
                  )}
                </div>

                <div className="mt-auto">
                  <Button
                    className="w-full group"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(project);
                    }}
                  >
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </motion.section>
  );
}