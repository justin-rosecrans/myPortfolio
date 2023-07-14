const withPlugins = require('next-compose-plugins');
const flowbite = require("flowbite/plugin")
const nextConfig = {
  trailingSlash: true,
  output: 'export'
}

module.exports = withPlugins([
  [nextConfig],
  [flowbite]
]);