// eslint-disable-next-line import/no-anonymous-default-export
export default {
  images: {
    // formats: ['image/avif', 'image/webp'],
    // minimumCacheTTL: 600,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
        pathname: "**",
      },
    ],
  },
}
