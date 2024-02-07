/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js,tsx,ts}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "1280px",
        }, // hoặc bất kỳ giá trị bạn muốn
      },
    },
  },
  plugins: [],
};
