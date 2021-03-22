const headers = require('./config/headers');
const redirects = require('./config/redirects');

module.exports = {
  trailingSlash: true,
  async redirects() {
    return redirects;
  },
  async headers() {
    return headers;
  },
};