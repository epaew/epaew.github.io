<template lang="pug">
  .row.margin-10
    .col.md-8
      .row.margin-0
        h3 About
        p 都内でアプリケーションエンジニアをしている、epaewの個人サイトです
      .row.margin-0
        h3 New Articles
        article-list(:max-per-page="5" :show-pager="false")
    .col.md-4
      .row.margin-0
        h3 Twitter
        Timeline(id="epaew_dev" sourceType="profile" :options="{ tweetLimit: '5' }")
</template>

<script>
import ArticleList from "@/components/article-list.vue";
import TransitionMixin from "@/lib/transition-mixin.js";

import { Timeline } from "vue-tweet-embed";

export default {
  head() {
    return { title: this.$route.name };
  },
  components: {
    ArticleList,
    Timeline
  },
  mixins: [TransitionMixin]
};
</script>
