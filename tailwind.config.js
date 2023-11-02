module.exports = {
  theme: {
    extend: {
      keyframes: {
        slowSpin: {
          "100%": {
            transform: "rotate (-360deg)",
          },
        },
      },
      animation: {
        slowSpin: "slowSpin linear 3s infinite",
      },
    },
  },
};
