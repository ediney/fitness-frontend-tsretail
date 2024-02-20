/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-50": "#f9fafb",
        "gray-100": "#f3f4f6",
        "gray-200": "#e5e7eb",
        "gray-500": "#6b7280",
        "primary-100": "#ffedd5",
        "primary-300": "#fdba74",
        "primary-500": "#f97316",
        "secondary-900": "#0f172a",
        "secondary-950": "#020617",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
          "mobile-home": "url('./src/assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        fitnesstext: "url('./src/assets/FitnessText.png')",
        abstractwaves: "url('./src/assets/AbstractWaves.png')",
        sparkles: "url('./src/assets/Sparkles.png')",
        circles: "url('./src/assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}



