import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // This tells Next.js to ignore ESLint errors during the build process
    ignoreDuringBuilds: false,
  },
  async rewrites() {
    return [
      {
        source: '/uploads/:path*',
        destination: '/api/uploads/:path*', // Serve from the mapped directory
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https' as 'https',
        hostname: 'hono-api.pictusweb.com',
        pathname: '/api/upload/technik/**',
      },
      {
        protocol: 'http' as 'http',
        hostname: 'localhost',
        port: '3013',
        pathname: '/api/upload/technik/**',
      },
      {
        protocol: 'https' as 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
}

export default withNextIntl(nextConfig)
