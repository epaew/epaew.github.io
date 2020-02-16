<template lang="pug">
  .row.margin-10
    .col.lg-8
      .row.sm-margin-x-0
        h3 About
      .row: .col
        p 都内でアプリケーションエンジニアをしている、epaewの個人サイトです
      .row.sm-margin-x-0
        h3 New Articles
      article-list(:max-per-page="5" :show-pager="false")
    .col.lg-4
      .row.sm-margin-x-0
        h3 Twitter
      .row.twitter-timeline
        Timeline(id="epaew_dev" sourceType="profile" :options="{ tweetLimit: '15' }")
</template>

<script>
import ArticleList from "@/components/article-list.vue";
import TransitionMixin from "@/lib/transition-mixin.js";

import { Timeline } from "vue-tweet-embed";

export default {
  components: {
    ArticleList,
    Timeline
  },
  mixins: [TransitionMixin],
  head() {
    return { title: this.$route.name };
  }
};
</script>
