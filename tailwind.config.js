module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        'pink-background':
          "url('https://cdn.tuk.dev/assets/pink-bg-gradient.jpg')"
      }
    }
  },
  plugins: []
}
