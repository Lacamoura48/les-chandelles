/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      quahon: "quahon",
      dm: "DM Serif Display",
    },
    extend: {
      transitionTimingFunction: {
        expo: "cubic-bezier(0.87, 0, 0.13, 1)",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
      colors: {
        violet: "#874493",
        pinkish: "#EA6577",
      },
    },
  },
  plugins: [],
}
