/** @type {import('next').NextConfig} */
const nextConfig = {
  // Убираем output: 'export' чтобы работали динамические маршруты
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
