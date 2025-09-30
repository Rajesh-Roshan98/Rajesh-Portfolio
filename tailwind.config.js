module.exports = {
  theme: {
    extend: {
      keyframes: {
        blob1: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(15px, -15px) rotate(10deg)' },
          '66%': { transform: 'translate(-15px, 15px) rotate(-10deg)' },
        },
        blob2: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(-20px, 20px) rotate(-12deg)' },
          '66%': { transform: 'translate(20px, -20px) rotate(12deg)' },
        },
      },
      animation: {
        blob1: 'blob1 12s ease-in-out infinite',
        blob2: 'blob2 14s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
