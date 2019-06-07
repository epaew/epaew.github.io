<template lang="pug">
  .row.margin-10
    .col
      h3 Blog
      article-list
</template>

<script>
import ArticleList from "@/components/article-list.vue";

export default {
  head() {
    return { title: this.$route.name };
  },
  components: {
    ArticleList
  }
};
</script>
