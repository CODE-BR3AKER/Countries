/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    // compatible with @nuxtjs/color-mode
    darkSelector: ".dark-mode",
    colors: {
      blue: {
        light: "hsl(200, 15%, 8%)",
        DEFAULT: "hsl(209, 23%, 22%)",
        dark: "hsl(207, 26%, 17%)"
      },
      gray: {
        light: "hsl(0, 0%, 98%)",
        DEFAULT: "hsl(0, 0%, 100%)",
        dark: "hsl(0, 0%, 52%)"
      }
    }
  },
  variants: {
    backgroundColor: [
      "dark",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd"
    ],
    borderColor: ["dark", "dark-focus", "dark-focus-within"],
    textColor: ["dark", "dark-hover", "dark-active"]
  },
  plugins: [require("tailwindcss-dark-mode")()]
};
