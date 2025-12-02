'use client';

import React, { useState } from 'react';
import { Button } from './ui/button';
import { Send } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;
        // Construct mailto link
        const mailtoLink = `mailto:teszael14@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="w-full max-w-4xl mx-auto mt-12">
            <div className="bg-card text-card-foreground border border-border rounded-2xl p-6 sm:p-10 shadow-lg">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                    <div className="flex flex-col sm:flex-row gap-6">
                        {/* Name */}
                        <div className="flex-1">
                            <label htmlFor="name" className="block text-sm font-medium mb-2 pl-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400 transition-all placeholder:text-muted-foreground/50"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="flex-1">
                            <label htmlFor="email" className="block text-sm font-medium mb-2 pl-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your email"
                                className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400 transition-all placeholder:text-muted-foreground/50"
                                required
                            />
                        </div>
                    </div>

                    {/* Subject */}
                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2 pl-1">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400 transition-all placeholder:text-muted-foreground/50"
                            required
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2 pl-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your message"
                            rows={6}
                            className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400 transition-all placeholder:text-muted-foreground/50 resize-none"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <Button
                            type="submit"
                            className="w-full sm:w-auto px-8 py-6 text-base font-semibold transition-all duration-300"
                        >
                            Send Message
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
