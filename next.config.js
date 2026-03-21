/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingIncludes: {
    '/api/files': ['./content/**/*.md'],
    '/api/file':  ['./content/**/*.md'],
    '/api/search': ['./content/**/*.md'],
  },
}

module.exports = nextConfig
