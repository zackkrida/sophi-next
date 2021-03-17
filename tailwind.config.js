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
      ringColor: ["hover", "active"],
      ringWidth: ["hover", "active"],
      backgroundColor: ["group-focus", "active"],
      borderColor: ["group-focus"],
      boxShadow: ["group-focus"],
      opacity: ["group-focus"],
      transform: ["hover", "focus", "group-hover", "group-focus"],
      translate: ["active", "group-hover"],
      textColor: ["group-focus", "active"],
      textDecoration: ["group-focus"],
      visibility: ["hover", "focus", "group-hover", "group-focus"],
    },
  },
  theme: {
    fontFamily: {
      sans:
        "ui-sans-serif, system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
    },
    extend: {
      colors: {
        "accent-1": "#333",
      },
    },
  },
}
