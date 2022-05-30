/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'sr'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  redirects: async () => [
    {
      source: '/',
      destination: '/blog',
      permanent: false,
    },
  ],
};

module.exports = nextConfig;
