/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true
})

module.exports = withPWA({
  experimental: {
    appDir: true,             // <---- Comment and Uncomment this
  },
  images: {
    domains: ['back-navigation.onrender.com' , 'localhost'],
  },
})