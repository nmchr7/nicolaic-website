require('dotenv').config();
const withOffline = require('next-offline');

const nextConfig = {
  env: {
    GA_ID: process.env.GA_ID,
    FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
  },
  workboxOpts: {
    swDest: 'static/service-worker.js',
  },
  experimental: {
    async rewrites() {
      return [
        {
          source: '/service-worker.js',
          destination: '/_next/static/service-worker.js',
        },
      ];
    },
  },
};

module.exports = withOffline(nextConfig);
