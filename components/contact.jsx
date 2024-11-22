import Link from 'next/link'
import {Linkedin, Mail, Send} from 'lucide-react'

export default function Contact() {
    return (
        <footer id="contact" className="bg-white pb-16 mx-8  md:px-8 pt-24 snap-start">
            <div >
                <h2 className="text-sm uppercase text-gray-500 text-center mb-2">Get in Touch</h2>
                <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>

                <div className="flex justify-center mb-16">
                    <div className="bg-gray-100 rounded-full py-3 px-12 flex items-center space-x-4">
                        <a target="_blank" rel="noopener noreferrer" href="mailto:teszael14@gmail.com?subject=Contact from Portfolio&body=Hi Zeal,"
                              className=" hover:scale-110 flex items-center text-lg   space-x-2 ">
                            <Mail size={30} color={"#bd3e3e"} />
                            <span className={"text-gray-600"}>teszael14@gmail.com</span>
                        </a>

                        <div className="w-px h-6 bg-gray-300"></div>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ZealTesfaye/"
                              className=" hover:scale-110 flex items-center text-lg   space-x-2 ">
                            <Linkedin size={30} color={"#0a8dea"}/>
                            <span className={"text-gray-600"}>LinkedIn</span>
                        </a>
                        <div className="w-px h-6 bg-gray-300 "></div>
                        <a target="_blank"
                              rel="noopener noreferrer"
                              href="https://t.me/zealtesfaye"
                              className=" hover:scale-110 flex items-center text-lg   space-x-2 ">
                            <Send size={30} color={"#24a9eb"}/>
                            <span className={"text-gray-600"}>Telegram</span>
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    )
}