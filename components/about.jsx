import Image from 'next/image'
import { Award, GraduationCap } from 'lucide-react'
import profilePicture from '../assets/images/profile-pic.jpg'

export default function AboutMe() {
    return (
        <section id="about" className="bg-white px-4 md:px-8 pt-32 pb-24 snap-start h-screen overflow-y-scroll hide-scrollbar">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8 md:mb-12  md:mr-20">About Me</h1>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24">
                    <div className="w-32 h-32 md:w-1/3 flex items-center justify-center">
                        <Image
                            src={profilePicture}
                            alt="Profile"
                            width={400}
                            height={400}
                            className="rounded-3xl"
                        />
                    </div>

                    <div className="md:w-2/3 flex flex-col justify-center items-center">
                        <p className="text-gray-700 leading-relaxed">
                            Aspiring software developer with hands-on experience in building web applications and backend systems
                            using technologies like React, Next JS, Node.js, MongoDB & MySQL. High commitment to learning. Growing
                            skills in Node.js, with a focus on writing efficient and maintainable code. Eager to contribute to existing &
                            new projects with ability to understand and work with minimal supervision.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 mt-6">
                            <div className="flex-1 p-6 border rounded-xl text-center">
                                <Award className="mx-auto mb-2" size={24} />
                                <h3 className="font-bold mb-1">Experience</h3>
                                <p className="text-gray-600 whitespace-nowrap" >~1 year in Web Development</p>
                            </div>
                            <div className="flex-1 p-6 border rounded-xl text-center">
                                <GraduationCap className="mx-auto mb-2" size={24} />
                                <h3 className="font-bold mb-1">Education</h3>
                                <p className="text-gray-600">Attending B.A. in Software Engineering at Addis Ababa Science & Technology University</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
