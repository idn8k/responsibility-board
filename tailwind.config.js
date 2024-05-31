/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        test_img: "url('/images/ao_bg_4.jpg')",
      },
      colors: {
        "pokpok-red": "#f26989",
        "pokpok-yellow": "#FFDA85",
        "pokpok-blue": "#118AB2",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
