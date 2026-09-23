/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lybocpogrvuebpgoleil.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
};

module.exports = nextConfig;








// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */

//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "ugsjxpxjqiitcgjwpoyp.supabase.co",
//         pathname: "**",
//       },
//     ],
//   },
// };

// export default nextConfig;
