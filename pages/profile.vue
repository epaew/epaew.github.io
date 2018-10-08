<template lang="pug">
.row.margin-10
  .col
    h3 Profile
  .col.md-3
    GoogleImage(alt="profile image" :imageId="imageId")
  .col.md-9
    dl
      dt Name
      dd: .col epaew (Ryo Maeda)
      dt Job
      dd: .col アプリケーションエンジニア
      dt Location
      dd: .col 日本 東京都
      dt Certifications
      dd
        .col.md-3 2017 春
        .col.md-9 データベーススペシャリスト試験 合格
      dd
        .col.md-3 2016 秋
        .col.md-9 ネットワークスペシャリスト試験 合格
      dd
        .col.md-3 2015 秋
        .col.md-9 応用情報技術者試験 合格
      dd
        .col.md-3 2015 春
        .col.md-9 基本情報技術者試験 合格
      dt Experiences
      dd: .col Ruby, Rails
      dd: .col SQL, MySQL
      dd: .col JavaScript, CoffeeScript, jQuery, Vue.js
      dd: .col HTML5, CSS3, Scss
      dd: .col Salesforce (Force.com)
</template>

<script>
import GoogleImage from "@/components/google-image";

export default {
  components: { GoogleImage },
  data() {
    return { imageId: "1EipICjahOr02Jb6cSAXTo2Zoxev13Z_J" };
  },
  head() {
    return { title: this.$route.name };
  }
};
</script>
