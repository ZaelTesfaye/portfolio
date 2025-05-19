'use client';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();
    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label="Toggle theme"
            className="relative"
        >
            <Sun className="h-5 w-5 text-yellow-400 absolute transition-all duration-300 scale-100 dark:scale-0 dark:opacity-0" />
            <Moon className="h-5 w-5 text-gray-200 absolute transition-all duration-300 scale-0 opacity-0 dark:scale-100 dark:opacity-100" />
        </Button>
    );
}