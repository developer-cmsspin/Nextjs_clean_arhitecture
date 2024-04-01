/** @type {import('next').NextConfig} */
const path = require('path');
const _additionalData = `@use 'global' as *;`;
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
    nextScriptWorkers: true
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/shared/styles'), path.join(__dirname, 'src/global/tokens')],
    _additionalData
  },
  output: 'standalone',
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320, 640, 1024, 1280, 1920]
  },
  webpack: (config) => {
    return config;
  }
};

module.exports = nextConfig;
