/** @type {import('next').NextConfig} */
const nextConfig = {
    // Use static export for Netlify deployment
    output: 'export',
    trailingSlash: true,
    images: {
      unoptimized: true
    },
    eslint: {
      ignoreDuringBuilds: true
    }
  };
  
  export default nextConfig;
  