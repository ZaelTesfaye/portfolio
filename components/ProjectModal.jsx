'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Copy } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button.tsx';
import Link from 'next/link';

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } },
    exit: { opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } },
};

const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut', type: 'spring', bounce: 0.4 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2, ease: 'easeIn' } },
};

export default function ProjectModal({ project, isOpen, onClose }) {
    const [copiedUsername, setCopiedUsername] = useState(false);
    const [copiedPassword, setCopiedPassword] = useState(false);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 z-50"
                        style={{ willChange: 'opacity' }}
                    />

                    {/* Modal Container */}
                    <div
                        onClick={onClose}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={(e) => e.stopPropagation()}
                            className="w-[95%] md:w-[90%] max-w-4xl max-h-[90vh] bg-background rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-border"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-gray-700 text-white rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>

                            {/* Scrollable Content */}
                            <div className="overflow-y-auto flex-1 overscroll-contain" style={{ transform: 'translateZ(0)' }}>
                                {/* Hero Image */}
                                <div className="relative w-full h-64 md:h-80 bg-muted">
                                    <Image
                                        src={project.image}
                                        alt={project.alt}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                    <div className="absolute bottom-0 left-0 p-6 md:p-8">
                                        <h2 className="text-3xl text-white md:text-4xl font-bold">
                                            {project.title}
                                        </h2>
                                    </div>
                                </div>

                                {/* Content Body */}
                                <div className="p-6 md:p-8 space-y-8">
                                    {/* About Section */}
                                    <div>
                                        <h3 className="text-xl font-semibold mb-3">About the Project</h3>
                                        <div className="space-y-3">
                                            {Array.isArray(project.fullDescription) ? project.fullDescription.map((part, index) => (
                                                <p key={index} className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                                    {part}
                                                </p>
                                            )) : (
                                                <p className="text-muted-foreground leading-relaxed">
                                                    {project.fullDescription || project.description || "No description available."}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Credentials if available */}
                                    {project.credentials && (
                                        <div className="bg-muted/50 p-4 rounded-lg border border-border">
                                            <h4 className="font-semibold mb-2 text-sm uppercase tracking-wider text-muted-foreground">
                                                Demo Credentials
                                            </h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div>
                                                    <span className="text-sm text-muted-foreground block">Username</span>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <code className="text-sm font-mono bg-background px-2 py-1 rounded border border-border flex-1">
                                                            {project.credentials.username}
                                                        </code>
                                                        <button
                                                            onClick={() => {
                                                                navigator.clipboard.writeText(project.credentials.username);
                                                                setCopiedUsername(true);
                                                                setTimeout(() => setCopiedUsername(false), 2000);
                                                            }}
                                                            className="p-1 hover:bg-muted rounded transition-colors"
                                                            title="Copy username"
                                                        >
                                                            <Copy size={14} />
                                                        </button>
                                                        {copiedUsername && <span className="text-white text-xs ml-1">Copied!</span>}
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="text-sm text-muted-foreground block">Password</span>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <code className="text-sm font-mono bg-background px-2 py-1 rounded border border-border flex-1">
                                                            {project.credentials.password}
                                                        </code>
                                                        <button
                                                            onClick={() => {
                                                                navigator.clipboard.writeText(project.credentials.password);
                                                                setCopiedPassword(true);
                                                                setTimeout(() => setCopiedPassword(false), 2000);
                                                            }}
                                                            className="p-1 hover:bg-muted rounded transition-colors"
                                                            title="Copy password"
                                                        >
                                                            <Copy size={14} />
                                                        </button>
                                                        {copiedPassword && <span className="text-white text-xs ml-1">Copied!</span>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Technologies */}
                                    <div>
                                        <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                                        <div className="flex flex-wrap gap-3">
                                            {project.stack.map((tech, index) => (
                                                <div
                                                    key={index}
                                                    className="flex hover:cursor-pointer items-center gap-2 px-3 py-2 bg-muted/50 rounded-full border border-border"
                                                >
                                                    <div className="relative w-5 h-5">
                                                        <Image
                                                            src={tech.icon}
                                                            alt={tech.name}
                                                            fill
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                    <span className="text-sm font-medium">{tech.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border">
                                        {project.type === 'site' ? (
                                            <Button asChild className="flex-1 h-12 text-base">
                                                <a
                                                    href={project.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center gap-2"
                                                >
                                                    Visit Project
                                                    <ExternalLink size={18} />
                                                </a>
                                            </Button>
                                        ) : (
                                            <Button asChild className="flex-1 h-12 text-base">
                                                <Link
                                                    href={project.preview?.previewPath || '#'}
                                                    className="flex items-center justify-center gap-2"
                                                >
                                                    App Preview <ExternalLink size={18} />
                                                </Link>
                                            </Button>
                                        )}

                                        {project.gitRepo && (
                                            <Button variant="outline" asChild className="flex-1 h-12 text-base">
                                                <a
                                                    href={project.gitRepo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center gap-2"
                                                >
                                                    View Codebase <Github size={18} />
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
