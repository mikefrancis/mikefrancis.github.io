module.exports = {
  darkMode: 'class',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
      mono: ['Jetbrains Mono', 'Fira Code', 'monospace'],
    },
    extend: {
      fontSize: {
        headline: ['2.25rem', '3.4rem'],
      },
      screens: {
        print: {
          raw: 'print',
        },
      },
    },
  },
  variants: {
    extend: {
      translate: ['dark'],
    },
  },
  plugins: [],
};
