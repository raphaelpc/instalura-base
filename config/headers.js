// https://nextjs.org/docs/api-reference/next.config.js/rewrites
module.exports = [
  {
    source: '/app/:path*/',
    headers: [
      {
        key: 'X-Frame-Options',
        value: 'DENY',
      },
    ],
  },
];
