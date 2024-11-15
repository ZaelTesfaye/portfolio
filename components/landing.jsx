import Image from 'next/image'
import Link from 'next/link'
import {Button} from "./ui/button"
import {Github, Linkedin} from 'lucide-react'
import profilePicture from '../assets/images/profile-pic.jpg'
import NavBar from "./navBar";

export default function Landing() {

    return (
        <div id={"landing"} className="pt-2 bg-white mb-32 snap-start h-screen ">
            <NavBar/>
            <main
                className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 p-8 md:p-24 mt-32">
                <div className="w-64 h-64 md:w-80 md:h-80 relative">
                    <Image
                        src={profilePicture}
                        alt="Zeal Tesfaye"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                    />
                </div>
                <div className="text-center md:text-left space-y-4">
                    <p className="text-xl">Hello, I'm</p>
                    <h2 className="text-4xl md:text-5xl font-bold">Zeal Tesfaye</h2>
                    <p className="text-2xl md:text-3xl text-gray-600">Web Developer</p>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <Button className="hover:scale-110" variant="outline">
                            <a target={"_blank"}
                               rel="noopener noreferrer"
                               href="https://drive.google.com/file/d/1E25lMT-D4n2UbCcK_G88Gh1jMaGIzzpQ/view?usp=sharing">View CV</a>
                        </Button>
                        <Button className="hover:scale-105"><Link href={"/#contact"}>Contact</Link></Button>
                    </div>
                    <div className="flex justify-center md:justify-start space-x-4 pt-2 pl-6">
                        <a target={"_blank"} rel="noopener noreferrer"
                           href="https://www.linkedin.com/in/zael-kassa-983584228/"
                           className="text-gray-600 hover:text-[#24a9eb]">
                            <Linkedin size={24}/>
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a target={"_blank"} rel="noopener noreferrer" href="https://github.com/ZaelTesfaye"
                           className="text-gray-600 hover:text-blue-800">
                            <Github size={24}/>
                            <span className="sr-only">GitHub</span>
                        </a>
                    </div>
                </div>
            </main>
        </div>
    )
}
