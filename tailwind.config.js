/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-gray-600',
    'bg-red-200',
    'border-red-900',
    'bg-yellow-200',
    'bg-green-200',
    'border-green-900',
    'bg-blue-200',
    'border-blue-900',
    'bg-indigo-200',
    'bg-purple-200',
    'bg-pink-200',
    'bg-orange-200',
    'bg-amber-200',
    'bg-lime-200',
  ],
  theme: {
    extend: {
      boxShadow: {
        device: '0px 40px 45px rgba(0, 0, 0, .4)',
        button: '0px 3px 3px rgba(0, 0, 0, .7)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
