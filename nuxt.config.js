import Articles from "./lib/articles.js";

module.exports = {
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
  modules: [["@nuxtjs/google-analytics", { id: "UA-127066891-1" }]],
  build: { extractCSS: { allChunks: true } },
  generate: {
    dir: "public",
    routes: Articles.getRoutes
  },
  env: {
    appName: "epaew.net"
  }
};
