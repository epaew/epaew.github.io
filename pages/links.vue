<template lang="pug">
.row.margin-10
  h3 Links
  .container
    ul
      li: a(href="https://github.com/epaew" target="_blank") GitHub
      li: a(href="https://qiita.com/epaew_dev" target="_blank") Qiita
      li: a(href="https://twitter.com/epaew_dev" target="_blank") Twitter
</template>

<script>
export default {
  head() {
    return { title: this.$route.name };
  }
};
</script>
