/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => [
    {
      source: '/',
      destination: '/blog',
      permanent: false,
    },
  ],
};

module.exports = nextConfig;
