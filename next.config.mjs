/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.scalingo.com',
                port: '',
                pathname: '/documentation/**',
            },
        ],
    },
};

export default nextConfig;
