module.exports = {
  theme: {
    extend: {
      fontFamily: {
        graffiti: ['"Rubik Spray Paint"', 'cursive'],
      },
    },
  },
  plugins: [],
};
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6F61",
        secondary: "#FFD93D",
      },

      /* 👇 ADD THIS BELOW colors */
      keyframes: {
        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        fadeUp: 'fadeUp 1s ease-out forwards',
      },

    },
  },
  plugins: [],
};

