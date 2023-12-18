/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: 
    {
       placeholderColor: {
       'primary': '#32B7C5',
       'secondary': '#85E6C5',
       'yellow': '#FBE09C',
       'dan' : "#624BC3"
     },
       screens: {
      'henphone': '360px',
      // => @media (min-width: 640px) { ... }
    },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    // {
    //   fontFamily: {
    //     "sans": ['var(--font-inter)'],
    //     "mono": ['var(--font-roboto-mono)'],
    //   },
    // }
  },
  plugins: [],
};
