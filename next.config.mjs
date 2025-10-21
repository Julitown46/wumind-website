// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                 
  basePath: '/wumind-website',      
  assetPrefix: '/wumind-website/',  
  images: { unoptimized: true },    
};
export default nextConfig;
