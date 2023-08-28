/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,   
  transpilePackages: ["@next-mobx-store/*"]
}
module.exports = nextConfig;
