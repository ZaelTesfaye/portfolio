import React from 'react';

const GridBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] h-full w-full bg-background pointer-events-none">
            <div
                className="absolute inset-0 h-full w-full animate-grid-move bg-[size:40px_40px]"
                style={{
                    backgroundImage: 'linear-gradient(to right, hsl(var(--foreground) / 0.1) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground) / 0.1) 1px, transparent 1px)'
                }}
            />
        </div>
    );
};

export default GridBackground;
