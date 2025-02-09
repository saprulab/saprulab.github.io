/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin'

export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: '#2bcadc',
          100: '#2bcadc',
          200: '#2bcadc',
          300: '#2bcadc',
          400: '#2bcadc',
          500: '#2bcadc',
          600: '#2bcadc',
          700: '#2bcadc',
          800: '#2bcadc',
          900: '#2bcadc'
        },
        bluegold: {
            100: "#00c9ff",
            200: "#2bcadc",
            300: "#56cbb9",
            400: "#81cc96",
            500: "#accd73",
            600: "#d7ce50",
            700: "#ffcf2e",
        },
        sgray: "#39484d"
      }
    }
  },
  plugins: [flowbitePlugin]
};
