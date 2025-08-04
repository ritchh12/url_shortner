/** @type {import('next').NextConfig} */
const nextConfig = {
    // Use standard build for Netlify deployment
    images: {
      unoptimized: true
    },
    eslint: {
      ignoreDuringBuilds: true
    }
  };
  
  export default nextConfig;
  