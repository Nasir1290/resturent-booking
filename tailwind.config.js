/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8aba51',
        secondary: '#334a55',
        subprimary: '#758888',
      },
      container: {
        center: true, // Center the container
        screens: {
          sm: '100%', // Full width on small screens
          md: '90%', // Full width on medium screens
          lg: '1024px', // Custom width for large screens
          xl: '1280px', // Custom width for extra large screens
        },
        margin: {
          DEFAULT: '3rem', // Apply 1rem margin by default on both left and right
        },
        
      },
    },
  },
  plugins: [],
}

