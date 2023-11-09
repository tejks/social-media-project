import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      margin: {
        '0.25': '1px',
      }},
  },
  plugins: [],
} satisfies Config;
