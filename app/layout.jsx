import React from 'react';
import './globals.css'
import { ThemeProvider } from "@/components/ThemeProvider";

const Layout = ({ children }) => {
    return (
        <html>
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
                    <div>
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
};

export default Layout;