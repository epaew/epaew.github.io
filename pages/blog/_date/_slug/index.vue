<template lang="pug">
  .container
    div(v-html="bodyHtml")
    time {{ $route.params.date }}
</template>

<script>
export default {
  asyncData({ params }) {
    const Obj = require(`@/blog/json/${params.date}_${params.slug}.json`);
    return Obj;
  },
  head() {
    return {
      title: this.title
    };
  }
};
</script>

<style scoped lang="scss">
.container {
  @for $i from 2 through 6 {
    /deep/ h#{$i} {
      font-style: normal;
      font-family: "Noto Sans JP", sans-serif;
    }
  }
}
</style>
