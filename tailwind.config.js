/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      logo: ["Great Vibes"],
      logo1: ["Satisfy"],
      navFont: ["Lora"],
      damion: ["Damion"],
      grotesk: ["HankenGrotesk"],
    },
    // colors: {
    //   "my-gray": "#BED1CF",
    //   "my-pink": "#E78895",
    //   "my-yellow": "#FFE4C9",
    //   "my-skin": "#FFF7F1",
    // },
  },
  plugins: [],
};
