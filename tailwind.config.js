/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5",
        secondary: "#7c3aed",
        dark: "#0f172a",
        darker: "#0a0f1c",
        ofcourse: "#e2e8f0",
      },
      animation: {
        flutter: "flutter 5s ease-in-out infinite",
      },
      keyframes: {
        flutter: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
