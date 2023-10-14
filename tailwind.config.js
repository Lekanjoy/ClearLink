/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
     colors: {       
       primColor: "#667085",
       headerColor: "#1D2939",
      },
    },
  },
  plugins: [],
};