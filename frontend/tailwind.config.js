/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js", // Correct Flowbite import
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")], // Correct Flowbite plugin usage
};
