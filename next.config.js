/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable React strict mode to reduce hydration errors
  reactStrictMode: false,

  // Disable React swc transform
  swcMinify: true,

  // Cấu hình cho Cloudflare Pages
  output: 'export', // Tạo build static cho Cloudflare Pages

  // Tắt tính năng không tương thích với Node.js 18.17.1
  experimental: {
    // Tắt các tính năng thử nghiệm có thể gây lỗi
    serverActions: false,
    serverComponentsExternalPackages: [],
  },

  // Cấu hình cho images
  images: {
    unoptimized: true, // Cần thiết cho static exports
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
