import nodejs from "../assets/images/node.png"
import typescript from "../assets/images/typescript.png"
import react from "../assets/images/react.png"
import reactNative from "../assets/images/reactnative.png"
import nextJs from "../assets/images/nextjs-icon.png"
import mongodb from "../assets/images/mongodb.png"
import firebaseIcon from "../assets/images/firebase.png"
import supabase from "../assets/images/supabase.png"
import express from "../assets/images/express.png"
import mySql from "../assets/images/mysql.png"
import tailwind from "../assets/images/Tailwind.png"
import React from "react";
import Image from "next/image";

const devSKills = {
    categories: [
        {
            title: "Frontend",
            skills: [
                {name: "Type Script", icon: typescript},
                {name: "Tailwind", icon: tailwind},
                {name: "React", icon: react},
                {name: "Next Js", icon: nextJs},
                {name: "React native", icon: reactNative},
            ]
        },
        {
            title: "Backend",
            skills: [
                {name: "Node JS", icon: nodejs},
                {name: "Express", icon: express},
                {name: "Mongo db", icon: mongodb},
                {name: "My Sql", icon: mySql},
                {name: "FireBase", icon: firebaseIcon},
                {name: "Supabase", icon: supabase},
            ]
        },

    ]
}

export default function Skills() {
    return (
        <section id="skills"
                 className="flex w-full justify-center bg-white px-8  pt-32 snap-start h-screen overflow-y-scroll  hide-scrollbar">
            <div className="w-full max-w-6xl pb-20">
                <h1 className="text-4xl font-bold mb-20 text-center ">Skills</h1>

                <div className="grid md:grid-cols-2 gap-20">
                    {devSKills.categories.map((category, index) => (
                        <div key={index} className="bg-gray-100 rounded-3xl p-12 border-2 border-gray-500 w-full">
                            <h3 className="text-xl font-bold mb-10">{category.title}</h3>
                            <div className="grid grid-cols-2 gap-12">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="flex items-center gap-4 hover:scale-110">
                                        <Image src={skill.icon} alt="Skill" width={35} height={35}/>
                                        <p className="font-medium text-[18px]">{skill.name}</p>


                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}