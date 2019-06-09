<template lang="pug">
.row.margin-10
  .col
    h3 Profile
  .col.md-3
    center
      GoogleImage.profile(alt="profile image" :imageId="imageId")
  .col.md-9
    dl
      dt Name
      dd: .col epaew (Ryo Maeda)
      dt Job
      dd: .col Application Engineer
      dt Location
      dd: .col Tokyo, JP
      dt Certifications
      dd(v-for="cert in certs")
        .col.sm-3 {{ cert[0] }}
        .col.sm-9 {{ cert[1] }}
      dt Experiences
      dd(v-for="(names, category) in experiences")
        .col.md-5.margin-bottom-10 {{ category }}
        .col.md-7
          ul
            li(v-for="name in names") {{ name }}
</template>

<script>
import GoogleImage from "@/components/google-image";
import TransitionMixin from "@/lib/transition-mixin.js";

export default {
  head() {
    return { title: this.$route.name };
  },
  components: { GoogleImage },
  mixins: [TransitionMixin],
  data() {
    return {
      imageId: "1EipICjahOr02Jb6cSAXTo2Zoxev13Z_J",
      certs: [
        ["2017 春", "データベーススペシャリスト"],
        ["2016 秋", "ネットワークスペシャリスト"],
        ["2015 秋", "応用情報技術者"],
        ["2015 春", "基本情報技術者"]
      ],
      experiences: {
        "Languages & Frameworks": [
          "Ruby (Rails5)",
          "JavaScript (jQuery, CoffeeScript, Vue.js)"
        ],
        RDBMSs: ["PostgreSQL", "MySQL"],
        Others: ["HTML5", "SCSS", "Salesforce (Force.com)"]
      }
    };
  }
};
</script>

<style scoped>
img.profile {
  width: 100%;
  max-width: 200px;
}
</style>
