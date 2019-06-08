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
    nuxt(v-touch:swipe.right="swipeRight" v-touch:swipe.left="swipeLeft")
  footer
    center
      p Copyright &copy; {{ appName }}, 2018-2019 All Rights Reserved.
</template>

<script>
import config from "@/global.json";

export default {
  data() {
    return {
      appName: config.appName,
      menus: config.menus
    };
  },
  computed: {
    menuValues() {
      return Object.values(this.menus);
    }
  },
  methods: {
    swipeRight() {
      this.pushRouter(-1);
    },
    swipeLeft() {
      this.pushRouter(1);
    },
    pushRouter(diff) {
      if (this.$device.isDesktop) {
        return;
      }

      let next = this.menuValues.indexOf(this.$route.path) + diff;
      if (0 <= next && next < this.menuValues.length) {
        this.$router.push(this.menuValues[next]);
      }
    }
  }
};
</script>
