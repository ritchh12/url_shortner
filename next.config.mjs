/** @type {import('next').NextConfig} */
const nextConfig = {
    // Standard build for server-side functionality
    images: {
      unoptimized: true
    },
    eslint: {
      ignoreDuringBuilds: true
    }
  };
  
  export default nextConfig;
  