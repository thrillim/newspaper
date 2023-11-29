/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#55433B',
          secondary: '#A26952',
          accent: '#ea580c',
          neutral: '#030303',
          'base-100': '#FFE9BD',
          info: '#0891b2',
          success: '#047857',
          warning: '#eab308',
          error: '#b91c1c',
        },
      },
      'retro',
    ],
  },
};
