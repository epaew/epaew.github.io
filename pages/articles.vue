<template lang="pug">
.row.margin-10
  .col
    .row.sm-margin-x-0
      h3 Articles
    article-list
</template>

<script>
import ArticleList from "@/components/article-list.vue";
import TransitionMixin from "@/lib/transition-mixin.js";

export default {
  components: {
    ArticleList
  },
  mixins: [TransitionMixin],
  head() {
    return { title: this.$route.name };
  }
};
</script>
