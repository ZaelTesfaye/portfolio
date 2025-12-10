import React from 'react';
import './globals.css'
import { ThemeProvider } from "../components/ThemeProvider.jsx";
import GridBackground from "../components/ui/GridBackground.jsx";

export const metadata = {
    title: 'Zeal Tesfaye - Full-Stack Developer',
    description: 'Passionate full-stack developer specializing in React, Node.js, and modern web technologies. Building scalable applications with clean code and innovative solutions.',
    keywords: ['Full-Stack Developer', 'React', 'Node.js', 'JavaScript', 'TypeScript', 'Web Development', 'Portfolio'],
    authors: [{ name: 'Zeal Tesfaye' }],
    creator: 'Zeal Tesfaye',
    publisher: 'Zeal Tesfaye',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://your-portfolio-domain.com'), // Replace with your actual domain
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Zeal Tesfaye - Full-Stack Developer',
        description: 'Passionate full-stack developer creating innovative web solutions with React, Node.js, and modern technologies.',
        url: 'https://your-portfolio-domain.com', // Replace with your actual domain
        siteName: 'Zeal Tesfaye Portfolio',
        images: [
            {
                url: '/profile-pic.jpg', // Using profile picture - consider creating a dedicated 1200x630 OG image
                width: 1200,
                height: 630,
                alt: 'Zeal Tesfaye - Full-Stack Developer',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Zeal Tesfaye - Full-Stack Developer',
        description: 'Passionate full-stack developer creating innovative web solutions with React, Node.js, and modern technologies.',
        creator: '@your-twitter-handle', // Replace with your Twitter handle
        images: ['/profile-pic.jpg'], // Same image as Open Graph
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/favicon.png',
        shortcut: '/favicon.png',
        apple: '/favicon.png',
    },
};

const Layout = ({ children }) => {
    return (
        <html suppressHydrationWarning>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <GridBackground />
                    <div className="relative z-10">
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
};

export default Layout;