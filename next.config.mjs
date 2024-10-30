/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true, // Ignore ESLint during builds
    },
    images:{
        domains: ['ltqzwwximfmgohiauqvj.supabase.co'],
    }
};

export default nextConfig;
