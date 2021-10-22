export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: "Countries - %s",
    title: "Home",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "msapplication-TileColor", content: "#da532c" },
      { name: "theme-color", content: "#ffffff" },
      {
        hid: "description",
        name: "description",
        content: "Countries"
      }
    ],
    link: []
  },
  // Routes
  router: {},
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],
  loading: {
    color: "#007C43",
    height: "5px"
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // add purge css
    "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "nuxt-webfontloader",
    "@nuxtjs/axios"
  ],
  tailwindcss: {
    // add '~tailwind.config` alias
    exposeConfig: true
  },
  purgeCSS: {
    whitelist: ["dark-mode"]
  },
  webfontloader: {
    google: {
      families: ['Nunito+Sans'] //Loads Lato font with weights 400 and 700
    }
  },
  axios: {
    https: true,
    // baseURL: ""
  },
  /*publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },*/
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
