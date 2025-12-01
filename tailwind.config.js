/** @type {import('tailwindcss').Config} */
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader", "postcss-loader"],
      include: /node_modules/,
    });
    return config;
  },
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        blink: "blink 1s steps(2, start) infinite",
        marquee: "marquee 30s linear infinite",
        "spin-slow": "spin 20s linear infinite",
        pulseSlow: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        fadeOut: "fadeOut 1s ease-in-out forwards",
        slideUp: "slideUp 0.5s ease-out",
      },
      colors: {
        one: "#e1af00", // Main golden yellow (brand color)
        primary: "#FFFFFF", // Crisp white (background / text contrast)
        secondary: "#FFF8E1", // Light creamy yellow (soft panels / sections)
        accent: "#FF6F00", // Deep orange (for emphasis, buttons, links)
        coal: "#3E2723", // Deep brownish charcoal (for readable dark text)

        // Icon and supporting colors
        sky: "#FFD54F", // Light amber (soft highlight / UI elements)
        deepBlue: "#1A237E", // Strong indigo (complementary contrast)
        lightGreen: "#C5E1A5", // Soft green (natural balance tone)

        track: {
          odd: "#FFF3E0", // Pale peach for zebra stripe (odd rows)
          even: "#FFE0B2", // Light orange for zebra stripe (even rows)
          green: "#F1F8E9", // Very soft green for gentle highlights
        },
      },

      textShadow: {
        blue1: "0px 0px 50px rgb(0, 0, 0)", // Example shadow
      },
      keyframes: {
        bubbleFadeSlide: {
          "0%": { opacity: 1, transform: "translateX(0)" },
          "100%": { opacity: 0, transform: "translateX(20px)" },
        },
        pulseSlow: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "0%": { opacity: 0 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0, transform: "translateY(-10px)" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
