/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    assetPrefix: isProd ? '/my-portfolio/' : '',
    basePath: isProd ? '/my-portfolio' : '',
    trailingSlash: true,
    output: 'export',
};

export default nextConfig;