import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "handletheheat.com",
        port: '',
        pathname: "/wp-content/uploads/2017/03/chewy-brownies-SQUARE.jpg",
        search: "",
      }
    ],
  },
};

export default nextConfig;
