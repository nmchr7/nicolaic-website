const withSourceMaps = require('@zeit/next-source-maps')();
const SentryWebpackPlugin = require('@sentry/webpack-plugin');
const withPWA = require('next-pwa');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const {
  ANALYZE,
  NEXT_PUBLIC_SENTRY_DSN: SENTRY_DSN,
  SENTRY_ORG,
  SENTRY_PROJECT,
  SENTRY_AUTH_TOKEN,
  NODE_ENV,
} = process.env;

process.env.SENTRY_DSN = SENTRY_DSN;

const isProduction = NODE_ENV === 'production';
const nextConfig = {
  webpack: (config, options) => {
    const copy = config;
    if (!options.isServer) {
      copy.resolve.alias['@sentry/node'] = '@sentry/browser';
    }
    if (
      isProduction &&
      !ANALYZE &&
      SENTRY_DSN &&
      SENTRY_ORG &&
      SENTRY_PROJECT &&
      SENTRY_AUTH_TOKEN
    ) {
      copy.plugins.push(
        new SentryWebpackPlugin({
          include: '.next',
          ignore: ['node_modules'],
          urlPrefix: '~/_next',
          release: options.buildId,
        })
      );
    }

    return copy;
  },

  pwa: {
    dest: 'public',
  },
};

module.exports = withSourceMaps(withBundleAnalyzer(withPWA(nextConfig)));
