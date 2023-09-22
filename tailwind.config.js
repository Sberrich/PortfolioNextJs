/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        tahu: "tahu",
        Moranga: "Moranga",
      },
      backgroundColor: {
        'primary-gradient': 'linear-gradient(45deg, #ff5733, #5f0a87)',
      },
      keyframes: {
        rotateBackground: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      borderColor: {
        'light-black': '#888888', // Replace with your desired lighter black color code
      },
    
    },
    
  },
  plugins: [],
};
