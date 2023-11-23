/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
    images: {
      loader: 'akamai',
      path: '',
    },
    assetPrefix: './',
    
  };
  module.exports = {
  basePath: '/my-nextjs-app', // Change this to match your repository name
}
  export default nextConfig;
