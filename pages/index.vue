<template lang="pug">
.row.margin-10
  h3 Title
</template>

<script>
export default {
  head() {
    return { title: this.$route.name };
  }
};
</script>
