/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // If using App Router
  ],
  theme: {
    extend: {
      colors: {
        'hueneu-primary': '#5A6B7C', // Muted Blue-Gray (Neu)
        'hueneu-secondary': '#C3B1A5', // Warm Taupe
        'hueneu-accent': '#FF6B6B', // Vibrant Coral/Red (Hue)
        'hueneu-neutral-light': '#F5F5F5', // Near White
        'hueneu-neutral-medium': '#E0E0E0', // Light Gray
        'hueneu-neutral-dark': '#333333', // Near Black
        'hueneu-success': '#4CAF50',
        'hueneu-warning': '#FF9800',
        'hueneu-error': '#F44336',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      // For scroll-triggered animations and specific design elements
      animation: {
        'logo-reveal': 'logo-reveal 1.5s ease-out forwards',
        'pop-out': 'pop-out 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      },
      keyframes: {
        'logo-reveal': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pop-out': {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}