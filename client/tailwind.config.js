

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],

  mode: "jit",
  theme: {
    container: {
      center: true,
      padding: '2px',
    },
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      }, keyframes: {
        heartBeat: {
          '0%': { transform: 'scale(1);' },
          '14%': { transform: 'scale(1.3);' },
          '28%': { transform: 'scale(1);' },
          '42%': { transform: 'scale(1.3);' },
          '70%': { transform: 'scale(1);' },
        },
        rubberBand: {
          from: { transform: 'scale3d(1,1,1)' },
          '30%': { transform: 'scale3d(1.25,.75,1)' },
          '40%': { transform: 'scale3d(.75,1.25,1)' },
          '50%': { transform: 'scale3d(1.15,.85,1)' },
          '65%': { transform: 'scale3d(.95,1.05,1)' },
          '75%': { transform: 'scale3d(1.05,.95,1)' },
          to: { transform: 'scale3d(1,1,1)' },
        }
      },
      animation: {
        heartBeat: 'heartBeat 1s ease-in-out',
        rubberBand: 'rubberBand 1s ease-in-out'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      ss: '360px',
      sm: '500px',
      md: '680px',
      lg: '952px',
      xl: '1150px',
      xxl: '1300px',
      xxxl: '1500px',
    },
  },
  plugins: [
    // require('flowbite/plugin'),
  ]
};