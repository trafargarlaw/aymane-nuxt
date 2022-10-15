/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      textColor: {
        paragraph: "#9197A0",
        title: "#1C2536",
      },
      backgroundImage: {
        "card-item":
          "url('https://cdn.lemon-interactive.fr/wp-content/uploads/2022/09/Image-ressources-humaines-500x309.jpg')",
      },
    },
  },
  plugins: [],
};
