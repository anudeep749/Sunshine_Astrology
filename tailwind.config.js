/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ec4899",
        secondary: "#f3f3f3",
        terinary: "#edebeb",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "3rem",
      },
    },
    backgroundImage: {
      "hero-pattern": "url('./assets/blob.svg')",
    },
  },
  plugins: [],
};
