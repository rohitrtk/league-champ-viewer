const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "beaufort-heavy": ["Beaufort Heavy", "serif"],
        "beaufort-medium": ["Beaufort Medium", "serif"],
        "beaufort-light": ["Beaufort Light", "serif"],
        "beaufort": ["Beaufort", "serif"],
      },
      colors: {
        "league-dark": "#08121A",
        "league-primary": "#CEA863"
      }
    },
  },
  plugins: [],
});