<template lang="pug">
  .col
    dl.margin-bottom-20
      .row(v-for="target in targets")
        dt {{ target.date }}
        dd: a(:href="target.url") {{ target.title }}
    center(v-if="showPager")
      .inline-block page:&nbsp;
      .inline-block
        select.form-control(id="page" v-model="pageNum")
          option(v-for="n in pages" :value="n") {{ n }}
</template>

<script>
import Articles from "@/lib/articles.js";

export default {
  name: "ArticleList",
  props: {
    "max-per-page": { type: Number, default: 20 },
    "show-pager": { type: Boolean, default: true }
  },
  data() {
    return {
      pageNum: 1
    };
  },
  computed: {
    pages() {
      return Array.from(Array(this.lastPageNum).keys()).map(i => i + 1);
    },
    targets() {
      return Articles.getArray().slice(this.dataRange()[0], this.dataRange()[1]);
    }
  },
  methods: {
    lastPageNum() {
      return Math.floor(Articles.getArray().length / this.maxPerPage) + 1;
    },
    dataRange() {
      return [
        this.maxPerPage * (this.pageNum - 1),
        this.maxPerPage * this.pageNum - 1
      ];
    }
  }
};
</script>
