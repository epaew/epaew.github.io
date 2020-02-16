<template lang="pug">
.row
  .col
    dl.margin-bottom-20
      .row.margin-x-0(v-for="target in targets")
        dt {{ target.pubDate }}
        dd
          a(target="_blank" :href="target.link") {{ target.title }}
          aside via&nbsp;{{ target.key }}
    center(v-if="showPager")
      .inline-block page:&nbsp;
      .inline-block
        select.form-control(id="page" v-model="pageNum")
          option(v-for="n in pages" :value="n") {{ n }}
</template>

<script>
import feeds from "@/articles/feeds.json";

export default {
  name: "ArticleList",
  props: {
    maxPerPage: { type: Number, default: 20 },
    showPager: { type: Boolean, default: true }
  },
  data() {
    return {
      articles: feeds.map(f =>
        Object.assign(f, { pubDate: f.pubDate.replace(/T.+Z/, "") })
      ),
      pageNum: 1
    };
  },
  computed: {
    pages() {
      return new Array(this.lastPageNum()).fill(0).map((_, idx) => idx + 1);
    },
    targets() {
      return this.articles.slice(...this.dataRange());
    }
  },
  methods: {
    lastPageNum() {
      return Math.floor(this.articles.length / this.maxPerPage) + 1;
    },
    dataRange() {
      return [
        this.maxPerPage * (this.pageNum - 1),
        this.maxPerPage * this.pageNum
      ];
    }
  }
};
</script>
