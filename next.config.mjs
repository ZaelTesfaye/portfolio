/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true, // Ignore ESLint during builds
    },
    images:{
        domains: ['ltqzwwximfmgohiauqvj.supabase.co'],
    },
    typescript: {
        ignoreBuildErrors: true, // This will allow the build to succeed despite type errors
    },
};

export default nextConfig;
