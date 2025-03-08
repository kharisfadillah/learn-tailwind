/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#203271",
          50: "#eef1f9", // Warna sangat terang
          100: "#d3d9ec", // Warna lebih terang
          200: "#a8b1d9",
          300: "#7c89c5",
          400: "#5061b1",
          500: "#203271", // Warna utama
          600: "#1b2b66",
          700: "#152257",
          800: "#101946",
          900: "#0b1238",
        },
      },
      fontFamily: {
        custom: ['Oswal', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
