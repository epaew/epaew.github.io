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
  modules: [
    "nuxt-compress",
    "@nuxtjs/device",
    "@nuxtjs/sitemap" // always declare the sitemap module at end of array
  ],
  plugins: ["@/plugins/vue-touch-events.js"],
  build: { extractCSS: true },
  generate: {
    dir: "public"
  },
  sitemap: {
    hostname: "https://www.epaew.net",
    routes: [
      { url: "/", changefreq: "daily" },
      { url: "/articles", changefreq: "daily" }
    ]
  }
};
