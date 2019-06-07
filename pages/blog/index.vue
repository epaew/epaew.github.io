<template lang="pug">
  .row.margin-10
    .col
      h3 Blog
      article-list(:articles="articles")
</template>

<script>
import ArticleMixin from "@/lib/articles-mixin.js";

export default {
  head() {
    return { title: this.$route.name };
  },
  mixins: [ArticleMixin]
};
</script>
