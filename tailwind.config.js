module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        city: "url('assets/images/backgrounds/city.gif')",
        beach: "url('assets/images/backgrounds/beach.gif')",
        rain: "url('assets/images/backgrounds/rain.gif')",
        space: "url('assets/images/backgrounds/space.gif')",
        forest: "url('assets/images/backgrounds/forest.gif')",
        desert: "url('assets/images/backgrounds/desert.gif')",
        thunder: "url('assets/images/backgrounds/thunder.gif')",
        fire: "url('assets/images/backgrounds/fire.gif')",
        river: "url('assets/images/backgrounds/river.gif')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
