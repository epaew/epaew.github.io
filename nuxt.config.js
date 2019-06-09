export default {
  head: {
    titleTemplate: "%s - epaew.net",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width,initial-scale=1.0" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  css: [
    "purecss/build/menus-min.css",
    "@/assets/css/skyblue/css/skyblue.min.css",
    "@/assets/sass/app.scss"
  ],
  modules: ["nuxt-compress", "nuxt-device-detect"],
  plugins: ["@/plugins/vue-touch-events.js"],
  build: { extractCSS: true },
  generate: {
    dir: "public"
  }
};
