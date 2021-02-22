module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  variants: {
    extend: {
      backgroundColor: ["group-focus", "active"],
      borderColor: ["group-focus"],
      boxShadow: ["group-focus"],
      opacity: ["group-focus"],
      textColor: ["group-focus", "active"],
      textDecoration: ["group-focus"],
    },
  },
  theme: {
    fontFamily: {
      body: ["Calibri, sans-serif"],
      heading: ["Calibri", "sans-serif"],
      display: ["Calibri", "sans-serif"],
    },
    extend: {
      colors: {
        "accent-1": "#333",
      },
    },
  },
}
