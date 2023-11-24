/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental: {
  //   esmExternals: false,
  // },
  rewrites: async () => [
    {
      source: "/public/myFile.html",
      destination: "/pages/api/myFile.js",
    },
  ],
  compiler: {
    // removeConsole: {
    //   exclude: ['error']
    // }
  },
  images: {
    domains: [
      "images.unsplash.com",
      "picjumbo.com",
      "api.sikkainepal.com",
      "localhost",
      "sikkai-resources.s3.ap-south-1.amazonaws.com",
    ],
  },
  // output: {
  //   globalObject: "this",
  // },
};

module.exports = nextConfig;
