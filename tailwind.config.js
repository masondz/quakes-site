/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nerko: "Nerko One",
        lilita: "Lilita One",
      },
      backgroundImage: {
        "hero-image": "url('/quakesCone.jpg')",
      },
      spacing: {
        jumbo: "75rem",
      },
    },
  },
  plugins: [],
};
