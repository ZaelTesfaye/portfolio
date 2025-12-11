'use client';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from './ui';

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();
    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label="Toggle theme"
            className="relative ml-0 sm:ml-5 px-0 sm:px-2"
        >
            <Sun className="!size-5  md:!size-4  text-black absolute transition-all duration-300 scale-100 dark:scale-0 dark:opacity-0" />
            <Moon className="!size-5 md:!size-6 text-gray-200 absolute transition-all duration-300 scale-0 opacity-0 dark:scale-100 dark:opacity-100" />
        </Button>
    );
}