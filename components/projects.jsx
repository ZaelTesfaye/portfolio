import Image from 'next/image'
import {Button} from "@/components/ui/button"
import ProjectImage1 from "../assets/images/project2.png"
import ProjectImage2 from "../assets/images/project1.png"
import ProjectImage3 from "../assets/images/project3.png"
import {Github} from "lucide-react";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "./ui/carousel"
import nodejs from "../assets/images/node.png"
import react from "../assets/images/react.png"
import reactNative from "../assets/images/reactnative.png"
import nextJs from "../assets/images/nextjs-icon.png"
import mongodb from "../assets/images/MongoDB.png"
import supabase from "../assets/images/Supabase.png"
import firebase from "../assets/images/firebase.png"
import tailwind from "../assets/images/Tailwind.png"
import express from "../assets/images/express.png"
import Link from 'next/link'
import React from "react";

const projects = [
    {
        title: "Real estate Marketplace",
        type: "site",
        image: ProjectImage1,
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
            },{
                name: "Tailwind",
                icon: tailwind
            },
        ],
        credentials: {
            username: "teszael14@gmail.com",
            password: "test",
        }
    },
    {
        title: "Chat App",
        type: "site",
        image: ProjectImage2,
        url: "https://chat-on-snappy.netlify.app",
        gitRepo: "https://github.com/ZaelTesfaye/Chat-App",
        alt: "Chat application",
        description: "Web-based chat application that uses web socket connection to allow real time chat among all users of the platorm.",
        stack: [
            {
                name: "React",
                icon: react
            }, {
                name: "Node JS",
                icon: nodejs
            },
            {
                name: "Express JS",
                icon: express
            }, {
                name: "MongoDB",
                icon: mongodb
            },
        ],
        credentials: {
            username: "test",
            password: "test",
        }
    },
    {
        title: "Business Directory",
        type: "app",
        image: ProjectImage3,
        url: "https://drive.google.com/file/d/1DBFsw5GAQP-AUv0FvwvgTyaiocXH01iv/view?usp=sharing",
        gitRepo: "https://github.com/ZaelTesfaye/Business-Directory",
        alt: "Business Directory app",
        description: "A cross platform mobile app that serves as one place to access details & rating of local businesses and for " +
            "business owners to post and manage their businesses.",
        stack: [
            {
                name: "React Native",
                icon: reactNative
            }, {
                name: "Firebase",
                icon: firebase
            },
            {
                name: "Tailwind",
                icon: tailwind
            },
        ],
        credentials: {
            username: "Google Sign in",
            password: "Google Sign in",
        }
    }
]

export default function Projects() {
    return (
        <section id="projects" className="bg-white pt-24 pb-52 snap-start hide-scrollbar">
            <div className=" mx-40">

                <h1 className="text-3xl font-bold text-center">Projects</h1>

                <Carousel opts={{align: "start",}} className="w-full">
                    <CarouselContent className="px-6 pt-2">
                        {projects.map((project, index) => (
                            <CarouselItem
                                className="md:basis-1/2 lg:basis-1/3 px-4 transform transition-transform duration-500"
                                key={index}>

                                <div
                                    className="bg-gray-100 rounded-3xl p-6 flex flex-col border-2 border-gray-400 h-9/10 hover:scale-[1.02]">
                                    <div className="relative w-full aspect-square mb-4 rounded-2xl overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.alt}
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                                    <p className="text-base mb-2 text-gray-400">{project.description}</p>
                                    {project.credentials &&
                                        <div>
                                            <div className={"mb-2"}>
                                                <p><span className={"font-medium"}> Username: </span> <span
                                                    className={"text-gray-500"}>{project.credentials.username}</span>
                                                </p>
                                                <p><span className={"font-medium"}> Password: </span> <span
                                                    className={"text-gray-500"}>{project.credentials.password}</span>
                                                </p>
                                            </div>
                                        </div>
                                    }
                                    <div className={"flex gap-4 pt-2  pb-1"}>
                                        {project.stack.map((tech, index) => (
                                            <Image key={index} src={tech.icon} alt={tech.name} className="w-7 h-7"/>
                                        ))}
                                    </div>


                                    <div className="mt-2 flex gap-4">
                                        <Button variant="outline" className="flex-1 hover:scale-105">
                                            <Github/>
                                            <Link target="_blank" rel="noopener noreferrer"
                                                  href={project.gitRepo}>Github</Link>
                                        </Button>
                                        <Button className="flex-1 hover:scale-105">
                                            <Link target="_blank" rel="noopener noreferrer" href={project.url}>
                                                {project.type === "site" ? "Go to Site" : "Download App"}</Link>
                                        </Button>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext/>
                </Carousel>

            </div>
        </section>
    )
}