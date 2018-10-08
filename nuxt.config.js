module.exports = {
  head: {
    titleTemplate: "%s - epaew's home",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width,initial-scale=1.0" }
    ]
  },
  css: [
    "purecss/build/menus-min.css",
    "@/assets/css/skyblue/css/skyblue.min.css",
    "@/assets/sass/app.scss"
  ],
  modules: [["@nuxtjs/google-analytics", { id: "UA-127066891-1" }]],
  build: { extractCSS: { allChunks: true } },
  generate: { dir: "public" },
  env: {
    profileImageUrl:
      "https://res.cloudinary.com/hbdchiunp/image/upload/v1538882414/profile_epaew.png"
  }
};
