/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */

const nextConfig = {
  trailingSlash: true,
  output: 'export'
}

module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  plugins: [
    require("flowbite/plugin"),
    nextConfig
  ],
  theme: {},
};