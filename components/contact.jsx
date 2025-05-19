'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Linkedin, Mail, Send } from 'lucide-react';

export default function Contact() {
    return (
        <motion.footer
            id="contact"
            className="bg-white pb-10 sm:pb-16 mx-2 sm:mx-8 md:px-8 pt-16 sm:pt-24"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: -150 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div>
                <h2 className="text-xs sm:text-sm uppercase text-gray-500 text-center mb-1 sm:mb-2">Get in Touch</h2>
                <h1 className="text-2xl sm:text-4xl font-bold text-center mb-4 sm:mb-8">Contact Me</h1>
                <div className="flex justify-center mb-8 sm:mb-16">
                    <div className="bg-gray-100 rounded-full py-2 sm:py-3 px-4 sm:px-12 flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="mailto:teszael14@gmail.com?subject=Contact from Portfolio&body=Hi Zeal,"
                            className="hover:scale-110 flex items-center text-base sm:text-lg space-x-2"
                        >
                            <Mail size={24} className="sm:w-[30px] sm:h-[30px]" color="#bd3e3e" />
                            <span className="text-gray-600">teszael14@gmail.com</span>
                        </a>
                        <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
                        <div className="block sm:hidden h-px w-6 bg-gray-300 my-2"></div>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://t.me/zealtesfaye"
                            className="hover:scale-110 flex items-center text-base sm:text-lg space-x-2"
                        >
                            <Send size={24} className="sm:w-[30px] sm:h-[30px]" color="#24a9eb" />
                            <span className="text-gray-600">Telegram</span>
                        </a>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}