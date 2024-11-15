import React from 'react';
import './globals.css'

const Layout = ({children}) => {
    return (
        <html>
        <head>
            <link rel="icon" href="/favicon.png"/>
        </head>
        <body>
        <div>
            {children}
        </div>

        </body>
        </html>
    );
};

export default Layout;