module.exports = {
  images: {
    domains: ['localhost'],
  },
  async redirects() {
    return [
      {
        source: '/admin',
        destination: 'https://personal-site-backend.fly.dev/admin',
        permanent: false,
      },
    ]
  },
}