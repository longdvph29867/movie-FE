/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js,tsx,ts}"],
  theme: {
    extend: {
      container: {
        padding: "0 16px",
      },
    },
  },
  plugins: [],
};
