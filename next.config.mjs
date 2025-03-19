/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: {
      buildActivity: false,  // Removes the "Static Route" popup
    },
    reactStrictMode: false,  // Optional: Disable Strict Mode if needed
    compiler: {
      reactRemoveProperties: true, // Helps remove some error overlays
    },
  output: 'export',
  };
  
  export default nextConfig;
  