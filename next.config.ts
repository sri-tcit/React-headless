import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      '@': './src',
      '@public': './public',
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '192.168.0.153',
        port: '1337',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
