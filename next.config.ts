import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",                    // 静态导出，零后端依赖
  distDir: "dist",
  images: {
    unoptimized: true,                 // 静态导出时关闭图片优化
  },
  trailingSlash: true,                 // SEO 友好 URL: /blog/post-name/
};

export default nextConfig;
