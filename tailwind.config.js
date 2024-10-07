/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,css}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-conic-gradient': 'conic-gradient(#b8d2f1 0%, #f289aa 10%, #c68bf0 20%, #d164da 30%, #c963e8 40%, #bfc2e8 50%, #ffc999 60%, #d0d8c9 70%, #bad0f1 80%, #ced8cb 90%, #ffffff 100%)',
      },
    },
  },
  plugins: [],
};
