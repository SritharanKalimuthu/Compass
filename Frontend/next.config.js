/** @type {import('next').NextConfig} */

module.exports = {
    async redirects() {
      return [
        // Basic redirect
        {
          source: '/auth',
          destination: '/auth/signup',
          permanent: true,
        },
    ]}
}  
