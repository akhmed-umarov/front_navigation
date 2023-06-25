/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: { 
        "7vh": "7vh",
        "9vh": "9vh",
        "30vh": "30vh",
        "50vh": "50vh",
        "93vh": "93vh",
        "100vh": "100vh",
        "50vw": "50vw",
        "100vw": "100vw",
      },
      colors: { 
        "bg-orange-infor": "#F4A900",
        "bg-blue-math": "",
        "bg-viol-physic": "",
      }
    },
  },
  plugins: [],
}
