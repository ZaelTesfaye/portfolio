import React from 'react';
import './globals.css'
import { ThemeProvider } from "../components/ThemeProvider.jsx";
import GridBackground from "../components/ui/GridBackground.jsx";

const Layout = ({ children }) => {
    return (
        <html suppressHydrationWarning>
            <head>
                <link rel="icon" href="/favicon.png" />
            </head>
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