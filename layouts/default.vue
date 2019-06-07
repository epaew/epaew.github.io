<template lang="pug">
.main
  header
    center
      h1.padding-top-10 {{ appName }}
    .pure-menu.pure-menu-horizontal
      center
        ul.pure-menu-list
          li.pure-menu-item(v-for="(path, label) in menus")
            nuxt-link.pure-menu-link(:to="path") {{ label }}
  .container
    nuxt
  footer
    center
      p Copyright &copy; {{ appName }}, 2018 All Rights Reserved.
</template>

<script>
export default {
  data() {
    return {
      appName: process.env.appName,
      menus: {
        Home: "/",
        Blog: "/blog",
        Profile: "/profile",
        Works: "/works",
        Links: "/links"
      }
    };
  },
  methods: {
    additionalClass(path) {
      if (path === this.$route.path) {
        return "nuxt-link-exact-active";
      } else {
        return "";
      }
    }
  }
};
</script>
