/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co', // Domain của ImgBB
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;