import defaultTheme from "tailwindcss/defaultTheme"
import svgToDataUri from "mini-svg-data-uri"
import colors from "tailwindcss/colors"
const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette")
import { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6f2fa",
          100: "#cce5f6",
          200: "#99cced",
          300: "#66b2e4",
          400: "#4d9ed1",
          500: "#4695e2", // Tu color primario
          600: "#3c7cb8",
          700: "#336399",
          800: "#294a7a",
          900: "#203860",
        },
        secondary: {
          50: "#f0f0f0", // Más claro
          100: "#dcdcdc",
          200: "#c9c9c9",
          300: "#b6b6b6",
          400: "#a3a3a3",
          500: "#4c4c4c", // Tu color secundario
          600: "#3d3d3d",
          700: "#2e2e2e",
          800: "#1f1f1f",
          900: "#101010", // Más oscuro
        },
      },
    },
  },
  plugins: [
    function addVariablesForColors({ addBase, theme }: any) {
      const allColors = flattenColorPalette(theme("colors"))
      const newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      )

      addBase({
        ":root": newVars,
      })
    },
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      )
    },
  ],
}

export default config
