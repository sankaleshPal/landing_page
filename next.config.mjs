/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
    images: {
      remotePatterns:[
        {
          protocol: "https",
          hostname: "images.unsplash.com",
        },
        {
          protocol: "https",
          hostname: "assets.hipalz.com",
        },
        {
          protocol: "https",
          hostname: "t-static.blr1.digitaloceanspaces.com",
        },
        {
          protocol: "https",
          hostname: "lh3.googleusercontent.com",
        },
        {
          protocol: "https",
          hostname: "20palnesto-storage24.s3.ap-south-1.amazonaws.com",
        },
        {
         protocol: "https",
         hostname:'grwbv2-assest.nyc3.cdn.digitaloceanspaces.com' 
        }
      ]
    },
    async headers() {
      return [
        {
          source: "/:all*(svg|jpg|png|webp|woff|woff2|ttf|otf|eot|map|txt|xml)",
          locale: false,
          headers: [
            {
              key: "Cache-Control",
              value: "public, max-age=86400",
            },
          ],
        },
        {
          source: "/:all",
          locale: false,
          headers: [
            {
              key: "Cache-Control",
              value: "no-cache, no-store, must-revalidate",
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;