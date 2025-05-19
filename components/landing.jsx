import Image from 'next/image'
import {Button} from "./ui/button"
import {Github, Linkedin} from 'lucide-react'
import profilePicture from '../assets/images/profile-pic.jpg'
import NavBar from "./navBar";

export default function Landing({currentSectionId, setCurrentSectionId}) {
    const sections = ["landing", "about", "skills", "projects", "contact"];
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start', // Scroll to the top of the element
            });
        }
        const sectionIndex = sections.findIndex((section, index) => section===id);
        setCurrentSectionId(sectionIndex);
    };

    return (
        <div id={"landing"} className="pt-2 bg-white mb-24 sm:mb-32 h-auto min-h-screen ">
            <NavBar currentSectionId={currentSectionId} setCurrentSectionId={setCurrentSectionId}/>
            <main
                className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12 p-4 sm:p-8 md:p-24 mt-24 sm:mt-32">
                <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 relative">
                    <Image
                        src={profilePicture}
                        alt="Zeal Tesfaye"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                        objectPosition=" top center"
                        unoptimized
                    />
                </div>
                <div className="text-center md:text-left space-y-2 sm:space-y-4">
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">Zeal Tesfaye</h2>
                    <p className="text-lg sm:text-2xl md:text-3xl text-gray-600">Full-stack Developer</p>
                    <div className="flex justify-center md:justify-start space-x-2 sm:space-x-4">
                        <Button className="hover:scale-110 text-xs sm:text-base" variant="outline">
                            <a target={"_blank"}
                               rel="noopener noreferrer"
                               href="https://drive.google.com/file/d/1gPpfSuZGR3h1rfAagmxNO--lNb4emWSD/view?usp=sharing">View CV</a>
                        </Button>
                        <Button className="hover:scale-105 text-xs sm:text-base"
                                onClick={() => scrollToSection('contact')}>
                            Contact
                        </Button>
                    </div>
                    <div className="flex justify-center md:justify-start space-x-3 sm:space-x-4 pt-2 pl-2 sm:pl-6">
                        <a target={"_blank"} rel="noopener noreferrer"
                           href="https://www.linkedin.com/in/ZealTesfaye/"
                           className="text-gray-600 hover:text-[#24a9eb]">
                            <Linkedin size={22}/>
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a target={"_blank"} rel="noopener noreferrer" href="https://github.com/ZaelTesfaye"
                           className="text-gray-600 hover:text-blue-800">
                            <Github size={22}/>
                            <span className="sr-only">GitHub</span>
                        </a>
                    </div>
                </div>
            </main>
        </div>
    )
}
