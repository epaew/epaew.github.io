<template lang="pug">
.row.margin-10
  .col
    .row.sm-margin-x-0
      h3 Links
    .row.margin-x-0
    ul: li(v-for="(url, name) in links")
      a(:href="url" target="_blank") {{ name }}
</template>

<script>
import TransitionMixin from "@/lib/transition-mixin.js";

export default {
  mixins: [TransitionMixin],
  data() {
    return {
      links: {
        GitHub: "https://github.com/epaew",
        Twitter: "https://twitter.com/epaew_dev",
        Qiita: "https://qiita.com/epaew_dev",
        "epaew's blog": "https://epaew.hatenablog.com/"
      }
    };
  },
  head() {
    return { title: this.$route.name };
  }
};
</script>
