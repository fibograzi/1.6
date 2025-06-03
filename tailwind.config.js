/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-purple': '#b829f7',
        'neon-green': '#39ff14',
        'dark-bg': '#0a0a0f',
        'darker-bg': '#050508',
        'cyberpunk-blue': '#00f0ff',
        'cyberpunk-pink': '#ff00ff',
      },
      fontFamily: {
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif'],
      },
      boxShadow: {
        'neon-purple': '0 0 10px #b829f7',
        'neon-green': '0 0 10px #39ff14',
        'neon-purple-lg': '0 0 20px #b829f7',
        'neon-green-lg': '0 0 20px #39ff14',
      },
      animation: {
        'glitch': 'glitch 5s infinite linear alternate-reverse',
        'scan': 'scan 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(57, 255, 20, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(57, 255, 20, 0.1) 1px, transparent 1px)',
        'hero-gradient': 'linear-gradient(135deg, rgba(10, 10, 15, 0.9) 0%, rgba(5, 5, 8, 0.95) 100%)',
      },
      backgroundSize: {
        'grid': '20px 20px',
      },
    },
  },
  plugins: [],
}
