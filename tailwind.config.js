module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./navigation/**/*/.{js,jsx,ts,tsx}"
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "emerald-500",
        secondary: "emerald-500",
      },
      inset: {
        "0": "0",
      },
      padding: {
        "5": "1.25rem",
      },
    },
  },
  plugins: [],
};
