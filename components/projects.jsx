'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import Link from 'next/link';
import React from 'react';
import projects from '../constants/projects';

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="bg-white pt-24 snap-start hide-scrollbar h-screen"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: -255 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center">Projects</h1>

        <Carousel opts={{ align: 'start' }} className="w-full relative">
          <CarouselContent className="px-2 md:px-6 pt-4">
            {projects.map((project, index) => (
              <CarouselItem
                key={index}
                className="min-w-full sm:min-w-32 sm:basis-full md:basis-1/2 lg:basis-1/3 px-2 transform transition-transform duration-500"
              >
                <div
                  className="min-w-full sm:min-w-64 bg-gray-100 rounded-3xl p-4 md:p-6 flex flex-col border-2 border-gray-400 hover:scale-[1.02]"
                  style={{ height: '600px' }}
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
                  <p className="text-sm md:text-base mb-2 text-gray-500 line-clamp-3 overflow-hidden flex-grow">
                    {project.description}
                  </p>
                  {project.credentials && (
                    <div className="mb-2">
                      <p>
                        <span className="font-medium text-blue-500">
                          Username:
                        </span>{' '}
                        <span className="text-gray-500">
                          {project.credentials.username}
                        </span>
                      </p>
                      <p>
                        <span className="font-medium text-blue-500">
                          Password:
                        </span>{' '}
                        <span className="text-gray-500">
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
                      <Button variant="outline" className="flex-1 hover:scale-105">
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
                    <Button className="hover:scale-105 flex-1">
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
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Buttons are always visible on small screens */}
          <div className="sm:hidden flex justify-between absolute top-1/2 left-0 right-0 px-2 z-10 -translate-y-1/2">
            <CarouselPrevious className="bg-blue-500 text-white hover:bg-blue-600 border-none shadow-md" />
            <CarouselNext className="bg-blue-500 text-white hover:bg-blue-600 border-none shadow-md" />
          </div>

          {/* Default buttons for larger screens */}
          <CarouselPrevious className="hidden sm:flex bg-blue-500 text-white hover:bg-blue-600 border-none shadow-md" />
          <CarouselNext className="hidden sm:flex bg-blue-500 text-white hover:bg-blue-600 border-none shadow-md" />
        </Carousel>
      </div>
    </motion.section>
  );
}