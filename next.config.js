module.exports = {
  images: {
    domains: ['localhost'],
  },
  async redirects() {
    return [
      {
        source: '/admin',
        destination: 'https://secure-waters-64507.herokuapp.com/admin',
        permanent: true,
      },
    ]
  },
}