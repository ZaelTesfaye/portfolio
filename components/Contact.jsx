"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Linkedin, Mail, Phone, Send } from "lucide-react";
import ContactForm from "./ContactForm.jsx";

export default function Contact() {
  return (
    <motion.footer
      id="contact"
      className="bg-transparent pb-10 sm:pb-16 mx-2 sm:mx-8 md:px-8 pt-44 sm:pt-36"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div>
        <h2 className="text-xs sm:text-sm uppercase text-muted-foreground text-center mb-1 sm:mb-2">
          Get in Touch
        </h2>
        <h1 className="text-2xl sm:text-4xl font-bold text-center mb-4 sm:mb-8">
          Contact Me
        </h1>

        <div className="flex justify-center mt-16 mb-8 sm:mb-16 ">
          <div className="bg-card text-card-foreground border border-border rounded-2xl py-2 sm:py-3 px-4 sm:px-12 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="tel:+251976440123"
              className="hover:scale-105 flex items-center text-base sm:text-lg space-x-2 transition-transform duration-500"
            >
              <Phone
                size={24}
                className="sm:w-[30px] sm:h-[30px]"
                color="green"
              />
              <span className="text-muted-foreground">+251976440123</span>
            </a>

            <div className="hidden sm:block w-px h-6 bg-border"></div>
            <div className="block sm:hidden h-px w-6 bg-border my-4"></div>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:teszael14@gmail.com?subject=Contact from Portfolio&body=Hi Zeal,"
              className="hover:scale-105 flex items-center text-base sm:text-lg space-x-2 transition-transform duration-500"
            >
              <Mail
                size={24}
                className="sm:w-[30px] sm:h-[30px]"
                color="#bd3e3e"
              />
              <span className="text-muted-foreground">teszael14@gmail.com</span>
            </a>
            <div className="hidden sm:block w-px h-6 bg-border"></div>
            <div className="block sm:hidden h-px w-6 bg-border my-4"></div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/zaeltesfaye"
              className="hover:scale-105 flex items-center text-base sm:text-lg space-x-2 transition-transform duration-500"
            >
              <Send
                size={24}
                className="sm:w-[30px] sm:h-[30px]"
                color="#24a9eb"
              />
              <span className="text-muted-foreground">Telegram</span>
            </a>

            <div className="hidden sm:block w-px h-6 bg-border"></div>
            <div className="block sm:hidden h-px w-6 bg-border my-4"></div>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/ZealTesfaye"
              className="hover:scale-105 flex items-center text-base sm:text-lg space-x-2 transition-transform duration-500"
            >
              <Linkedin size={22} />
              <span className="dark:text-gray-400">LinkedIn</span>
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </motion.footer>
  );
}
