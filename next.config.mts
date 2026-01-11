import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  typedRoutes: true,
  // cacheComponents: true,
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'panda-market-api.vercel.app',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '3003',
        pathname: '/uploads/**',
      },
    ],
  },
  experimental: {
    typedEnv: true,
  },
};

export default nextConfig;
