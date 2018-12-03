<template lang="pug">
  .container
    .text-right
      a(
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        class="twitter-share-button"
        data-show-count="false"
      )
        | Tweet
    div(v-html="bodyHtml")
    time {{ $route.params.date }}
</template>

<script>
import GoogleImage from "@/components/google-image";

export default {
  asyncData({ params }) {
    const Obj = require(`@/blog/json/${params.date}_${params.slug}.json`);
    return Obj;
  },
  components: { GoogleImage },
  head() {
    return {
      title: this.title,
      script: [{ src: "https://platform.twitter.com/widgets.js", charset: "utf-8", body: true }]
    };
  },
  mounted() {
    const links = this.$el.querySelectorAll("a");
    for (const link of links) {
      const href = link.attributes["href"].value;
      const is_omitted = !href.includes("http") ? 1 : 0;
      const is_local = href.includes("www.epaew.net") ? 1 : 0;

      if (!(is_omitted ^ is_local)) {
        const icon = `<span class="icon-exapnd2" />`;
        link.setAttribute("target", "_blank");
        link.insertAdjacentHTML("beforeend", icon);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  @for $i from 2 through 6 {
    /deep/ h#{$i} {
      font-style: normal;
      font-family: "Noto Sans JP", sans-serif;
    }
  }
}
</style>
