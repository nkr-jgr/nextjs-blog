/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react';
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      textColor: {
        light: "#333333", // Light mode text color
        dark: "#FFFFFF", // Dark mode text color
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {
        spacingUnit: 4,
        fontSize: {
          tiny: "0.75rem", // text-tiny
          small: "0.875rem", // text-small
          medium: "1rem", // text-medium
          large: "1.125rem", // text-large
        },
        lineHeight: {
          tiny: "1rem", // text-tiny
          small: "1.25rem", // text-small
          medium: "1.5rem", // text-medium
          large: "1.75rem", // text-large
        },
      }, // common layout tokens (applied to all themes)
      themes: {
        dark: {
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
          colors: {
            background: "#333333", // Dark background
            foreground: "#FFFFFF",  // Light foreground text
            primary: {
              50: "#292929",
              100: "#262626",
              200: "#202020",
              300: "#1C1C1C",
              400: "#181818",
              500: "#151515",
              600: "#121212",
              700: "#0E0E0E",
              800: "#0B0B0B",
              900: "#080808",
              DEFAULT: "#151515",
              foreground: "#FFFFFF",
            },
            focus: "#007AFF",
          },
        },
        light: {
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
          colors: {
            background: "#ECECEC",
            foreground: "#333333",
            primary: {
              50: "#C6C6C6",
              100: "#B9B9B9",
              200: "#ACACAC",
              300: "#9F9F9F",
              400: "#929292",
              500: "#858585",
              600: "#787878",
              700: "#6B6B6B",
              800: "#5E5E5E",
              900: "#515151",
              DEFAULT: "#858585",
              foreground: "#333333",
            },
            focus: "#FF9500",
          },
        },
      },
    }),
  ],
}
