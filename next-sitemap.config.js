module.exports = {
    siteUrl: 'https://zealtesfaye.me',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    generateIndexSitemap: true, // Set to true to create an index sitemap file if needed
    outDir: './public', // Ensures the sitemap is saved to the public folder
    additionalPaths: async (config) => {
        return [
            { loc: '/about' },    // Add each route manually
            { loc: '/contact' },
            { loc: '/projects' },
            { loc: '/skills' },
            { loc: '/' },         // Root path
            // Add more static or dynamic paths if needed
        ];
    },
};
