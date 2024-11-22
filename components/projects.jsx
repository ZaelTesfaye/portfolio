import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Link from 'next/link';
import React from "react";
import projects from "../constants/projects";

export default function Projects() {
    return (
        <section id="projects" className="bg-white pt-24 snap-start hide-scrollbar">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl md:text-3xl font-bold text-center">Projects</h1>

                <Carousel opts={{ align: "start" }} className="w-full">
                    <CarouselContent className="px-2 md:px-6 pt-4">
                        {projects.map((project, index) => (
                            <CarouselItem
                                className="min-w-full sm:min-w-32 sm:basis-full md:basis-1/2 lg:basis-1/3 px-2 transform transition-transform duration-500"
                                key={index}
                            >
                                <div className="min-w-full sm:min-w-64 bg-gray-100 rounded-3xl p-4 md:p-6 flex flex-col border-2 border-gray-400 hover:scale-[1.02]">
                                    <div className="relative w-full aspect-square mb-4 rounded-2xl overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.alt}
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                    <h3 className="text-lg md:text-2xl font-semibold mb-4">{project.title}</h3>
                                    <p className="text-sm md:text-base mb-2 text-gray-400">{project.description}</p>
                                    {project.credentials && (
                                        <div>
                                            <div className="mb-2">
                                                <p>
                                                    <span className="font-medium text-blue-500">Username:</span>{" "}
                                                    <span className="text-gray-500">{project.credentials.username}</span>
                                                </p>
                                                <p>
                                                    <span className="font-medium text-blue-500">Password:</span>{" "}
                                                    <span className="text-gray-500">{project.credentials.password}</span>
                                                </p>
                                            </div>
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

                                    <div className="mt-2 flex flex-wrap gap-4">
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
                                        <Button className="hover:scale-105">
                                            {project.type === "site" ? (
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
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    );
}
