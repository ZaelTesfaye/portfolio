import Image from 'next/image'
import {Button} from "@/components/ui/button"
import ProjectImage from "../assets/images/project.jpeg"
import {Github} from "lucide-react";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "./ui/carousel"
import nodejs from "../assets/images/node.png"
import typescript from "../assets/images/typescript.png"
import react from "../assets/images/react.png"
import reactNative from "../assets/images/reactnative.png"
import nextJs from "../assets/images/nextjs-icon.png"
import mongodb from "../assets/images/MongoDB.png"
import firebaseIcon from "../assets/images/firebase.png"
import supabase from "../assets/images/Supabase.png"
import express from "../assets/images/express.png"
import mySql from "../assets/images/mysql.png"
import tailwind from "../assets/images/Tailwind.png"
import Contact from "../components/contact";
import Link from 'next/link'
import React from "react";

const projects = [
    {
        title: "Real estate Marketplace",
        type: "site",
        image: ProjectImage,
        url: "https://next-market-place-v3q4-brp45fs6j-zaeltesfayes-projects.vercel.app/login",
        gitRepo: "https://github.com/ZaelTesfaye/Next-Market-place",
        alt: "Real estate Marketplace app",
        description: "Real-estate market platform that allows users to post, edit and access properties for sell and rent in one place.",
        stack: [
            {
                name: "Next Js",
                icon: nextJs
            }, {
                name: "Supabase",
                icon: supabase
            },
        ]
    },
    {
        title: "Chat App",
        type: "site",
        image: ProjectImage,
        url: "https://chat-on-snappy.netlify.app",
        gitRepo: "https://github.com/ZaelTesfaye/Chat-App",
        alt: "Chat application",
        description: "Web-based chat application that uses web socket connection to allow real time chat where users can create profile and start conversations instantly.",
        stack: [
            {
                name: "React",
                icon: react
            }, {
                name: "Express JS",
                icon: express
            }, {
                name: "MongoDB",
                icon: mongodb
            },
        ]
    },
    {
        title: "Business Directory",
        type: "app",
        image: ProjectImage,
        url: "Github",
        gitRepo: "",
        alt: "Business Directory app",
        description: "A cross platform mobile app that serves as a one place to access the details and contact information of local businesses with ability " +
                    "for business owners to post and manage their businesses.",
        stack: [
            {
                name: "React Native",
                icon: reactNative
            },{
                name: "Firebase",
                icon: firebaseIcon
            },
        ]
    }
]

export default function Projects() {
    return (
        <section id="projects" className="bg-white pt-24 px-4 pb-52md:px-8 snap-start hide-scrollbar">
            <div className="max-w-6xl mx-auto">

                <h1 className="text-3xl font-bold text-center mb-4">Projects</h1>

                <Carousel opts={{align: "start",}} className="w-full">
                    <CarouselContent>
                        {projects.map((project, index) => (
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>

                                <div
                                    className="bg-gray-100 rounded-3xl p-6 flex flex-col border-2 border-gray-400">
                                    <div className="relative w-full aspect-square mb-4 rounded-2xl overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.alt}
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                                    <p className="text-base mb-4 text-gray-400">{project.description}</p>

                                    <div className={"flex gap-4  pb-5"}>
                                        {project.stack.map((tech, index) => (
                                            <Image key={index} src={tech.icon} alt={tech.name} className="w-7 h-7"/>
                                        ))}
                                    </div>

                                    <div className="mt-auto flex gap-4">
                                        <Button variant="outline" className="flex-1 hover:scale-110">
                                            <Github/>
                                            <Link target="_blank" rel="noopener noreferrer" href={project.gitRepo}>Github</Link>
                                        </Button>
                                        <Button className="flex-1 hover:scale-110">
                                           <Link target="_blank" rel="noopener noreferrer" href={project.url}>Go to {project.type}</Link>
                                        </Button>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext/>
                </Carousel>
        <Contact />
            </div>
        </section>
    )
}