import React from 'react';
import './globals.css'
import { ThemeProvider } from "../components/ThemeProvider.jsx";
import GridBackground from "../components/ui/GridBackground.jsx";

const description = 'Full-stack developer with specialized skills in modern web technologies. Building scalable applications with clean code and innovative solutions.'
const title = "Zeal Tesfaye - Full-Stack Dev";
const metaTitle = "Zeal Tesfaye - Full-Stack Dev";
export const metadata = {
    title: title,
    description: description,
    authors: [{ name: 'Zeal Tesfaye' }],
    creator: 'Zeal Tesfaye',
    publisher: 'Zeal Tesfaye',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://zealtesfaye.dev'), 
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: title,
        description: description,
        url: 'https://zealtesfaye.dev', 
        siteName: metaTitle,
        images: [
            {
                url: '/public/favicon.png', 
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
        title: metaTitle,
        description: description,
        creator: '@zeal-tesfaye', 
        images: ['/public/favicon.png'], 
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
        icon: 'public/favicon.png',
        shortcut: 'public/favicon.png',
        apple: 'public/favicon.png',
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