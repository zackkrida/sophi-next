module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  plugins: [require("@tailwindcss/ui")],
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["Calibri, sans-serif"],
      display: ["Graphik", "sans-serif"],
    },
    extend: {
      colors: {
        "accent-1": "#333",
      },
    },
  },
  variants: {},
};
