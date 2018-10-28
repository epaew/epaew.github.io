<template lang="pug">
.row.margin-10
  .col
    h3 About
    p 都内でアプリケーションエンジニアをしている、epaewの個人サイトです
  .col.md-8
    h3 Blog
    p Now building...
  .col.md-4
    h3 Twitter
    Timeline(id="epaew_dev" sourceType="profile" :options="{ tweetLimit: '5' }")
</template>

<script>
import { Timeline } from "vue-tweet-embed";

export default {
  head() {
    return { title: this.$route.name };
  },
  components: {
    Timeline
  }
};
</script>
