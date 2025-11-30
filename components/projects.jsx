'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import projects from '../constants/projects';

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="bg-background pt-24 snap-start hide-scrollbar min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-full flex flex-col gap-4 items-center px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center">Latest Projects</h1>

        <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 px-2 md:px-6 pt-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="px-2 transform transition-transform duration-500"
              >
                <div
                  className="min-w-full sm:min-w-64 bg-card text-card-foreground rounded-3xl p-4 md:p-6 flex flex-col border-2 border-border hover:scale-[1.02] hover:cursor-pointer transition-transform duration-300"
                  style={{ height: '650px' }}
                >
                  <div className="relative w-full aspect-square mb-4 rounded-2xl overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <h3 className="text-lg md:text-2xl font-semibold mb-2 truncate">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base mb-2 text-muted-foreground line-clamp-3 overflow-hidden flex-grow">
                    {project.description}
                  </p>
                  {project.credentials && (
                    <div className="mb-2">
                      <p>
                        <span className="font-medium text-blue-500">
                          Username:
                        </span>{' '}
                        <span className="text-muted-foreground">
                          {project.credentials.username}
                        </span>
                      </p>
                      <p>
                        <span className="font-medium text-blue-500">
                          Password:
                        </span>{' '}
                        <span className="text-muted-foreground">
                          {project.credentials.password}
                        </span>
                      </p>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-4 pt-2 pb-1">
                    {project.stack.map((tech, index) => (
                      <Image
                        key={index}
                        src={tech.icon}
                        alt={tech.name}
                        className="w-6 h-6 md:w-7 md:h-7"
                      />
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-4">
                    {project?.gitRepo && (
                      <Button variant="outline" className="flex-1">
                        <Github />
                        <Link
                          target="_blank"
                          rel="noopener noreferrer"
                          href={project.gitRepo}
                        >
                          Github
                        </Link>
                      </Button>
                    )}
                    <Button className="flex-1">
                      {project.type === 'site' ? (
                        <a
                          className="px-2 w-full"
                          target="_blank"
                          rel="noopener noreferrer"
                          href={project.url}
                        >
                          Go to Site
                        </a>
                      ) : (
                        <Link className="w-full" href={project.preview.previewPath}>
                          App Preview
                        </Link>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </motion.section>
  );
}