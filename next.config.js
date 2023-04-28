/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://387c-116-74-34-218.ngrok-free.app/:path*'
      }
    ]
  }
}

module.exports = nextConfig
