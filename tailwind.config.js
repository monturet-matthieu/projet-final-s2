const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "Primaire": "#f8fbff",
        "Secondaire": "#0f286a",
        "Texte": "#04060a",
        "Boutons": "#ffa144",
        "Important": "#e53844",
        "bleu10%": "#e1e6f0",
        "bleu20%": "#c9d1e1",
        "bleu30%": "#b2bcd2",
        "bleu40%": "#949eb9",
        "bleu50%": "#7e8aac",
        "bleu60%": "#68779f",
        "bleu75%": "#46598b",
        "bleu80%": "#3b4f84",
        "bleu90%": "#253c77",
        "Vert": "#08ad36",
        "orange50%": "#f2c294",
        "Jaune": "#f1cb02",
        "orange-90%": "#fca855"
      },
      "fontSize": {
        "4xs": "0.5625rem",
        "3xs": "0.6875rem",
        "2xs": "0.75rem",
        "xs": "0.875rem",
        "sm": "0.9375rem",
        "base": "1rem",
        "lg": "1.0625rem",
        "xl": "1.25rem",
        "2xl": "1.375rem",
        "3xl": "1.625rem",
        "4xl": "1.75rem",
        "5xl": "2.25rem",
        "6xl": "2.5rem",
        "7xl": "3.125rem",
        "8xl": "6.25rem"
      },
      "fontFamily": {
        'karla': 'Karla, sans-serif',
      },
      "borderRadius": {
        "none": "0",
        "xs": "0.0625rem",
        "sm": "0.0833333358168602rem",
        "default": "0.10000000149011612rem",
        "lg": "0.15625rem",
        "xl": "0.1666666716337204rem",
        "2xl": "0.1875rem",
        "3xl": "0.25rem",
        "4xl": "0.3125rem",
        "5xl": "0.375rem",
        "6xl": "0.5rem",
        "7xl": "0.5625rem",
        "8xl": "0.5654296875rem",
        "9xl": "0.625rem",
        "10xl": "0.65625rem",
        "11xl": "0.75rem",
        "12xl": "0.8125rem",
        "13xl": "0.875rem",
        "14xl": "0.9375rem",
        "15xl": "1rem",
        "16xl": "1.1875rem",
        "17xl": "1.25rem",
        "18xl": "1.28125rem",
        "19xl": "1.4375rem",
        "20xl": "1.75rem",
        "21xl": "1.8125rem",
        "22xl": "1.875rem",
        "23xl": "2.4375rem",
        "24xl": "2.5rem",
        "25xl": "2.8271484375rem",
        "26xl": "3.125rem",
        "27xl": "3.1875rem",
        "28xl": "3.5rem",
        "29xl": "4.6875rem",
        "30xl": "4.75rem",
        "31xl": "4.875rem",
        "32xl": "5rem",
        "33xl": "5.0888671875rem",
        "34xl": "5.125rem",
        "35xl": "6rem",
        "full": "9999px"
      }
    },
  },
  plugins: [],
}
