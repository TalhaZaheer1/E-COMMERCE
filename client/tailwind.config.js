/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        'xs':'476px',
        'sm':'640px',
        'md':'768px',
        'lg':'1024px',
        'xl':'1280px',
        '2xl':'1536px',
      
      },
    },
    screens: {
      'xxs':'410px',
      'xs':'476px',
      'sm':'640px',
      'md':'768px',
      'x-md':'980px',
      'lg':'1180px',
      'xl':'1280px',
      '2xl':'1440px',
    },
  },
  plugins: [],
}

