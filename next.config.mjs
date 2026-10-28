/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/projeler", destination: "/referanslar", permanent: true },
      { source: "/projeler/:slug", destination: "/referanslar/:slug", permanent: true },
      { source: "/ortaklar", destination: "/ekosistem", permanent: true },
    ]
  },
}

export default nextConfig
