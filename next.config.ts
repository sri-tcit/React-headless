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
        hostname: '31.220.82.50',
        port: '1337',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
