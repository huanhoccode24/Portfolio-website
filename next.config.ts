import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* Các cấu hình khác của bạn ở đây (nếu có) */
};

// Bọc nextConfig bằng withNextIntl
export default withNextIntl(nextConfig);
