/** @type {import('next').NextConfig} */
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
});
const nextConfig = {  
  reactStrictMode: true,   
  transpilePackages: ["@next-mobx-store/*"]
}
module.exports = withNextra();
