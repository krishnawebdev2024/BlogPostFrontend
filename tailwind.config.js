/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [
      './src/**/*.{html,js,jsx,ts,tsx}',  
      './public/index.html',              
      './components/**/*.{html,js,jsx,ts,tsx}', 
  ],
  safelist: [
    'bg-red-500',
    'text-center',
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
}
