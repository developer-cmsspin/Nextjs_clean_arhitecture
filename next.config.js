/** @type {import('next').NextConfig} */
const path = require('path');
const env = process.env;
const isProd = env.NODE_ENV === 'production';
const _additionalData = `@use 'global' as *;`;
console.log('THEME: ' + env.NEXT_PUBLIC_THEME + 'Path: ' + __dirname);

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer({
  env: {
    NEXT_PUBLIC_ENV: 'PRODUCTION' //your next configs goes here
  }
});

const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
    nextScriptWorkers: true
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/shared/styles'), path.join(__dirname, './src/shared/themes/energizeeUI')],
    _additionalData
  },
  output: 'standalone',
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320, 640, 1024, 1280, 1920]
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    // Important: return the modified config
    /*
    config.module.rules?.push({
      test: /\.scss$/,
      include: path.resolve(__dirname, './src/shared/themes/mili'),
      use: ['ignore-loader']
    });
    */

    /*
    config.module.rules.push({
      test: /\.scss$/,
      include: [path.resolve(__dirname, './src/shared/themes/energizeeUI')],
      use: ['style-loader', 'css-loader', 'sass-loader']
    });
    */
    return config;
  }
};

module.exports = nextConfig;
