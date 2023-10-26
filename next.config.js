/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
  compiler: {
    styledComponents: true
  }
}