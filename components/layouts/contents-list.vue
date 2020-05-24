<template lang="pug">
    v-list
      v-list-item(
        exact
          router
          v-for="(item, index) in drawerContents"
          :key="index"
          :to="item.to"
        )
          v-list-item-content
            v-list-item-title.title(v-text="item.title")
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      drawerContents: [
        { title: 'Welcome', to: '/' },
        { title: 'Articles', to: '/articles' },
        { title: 'Works', to: '/works' },
      ],
    };
  },
});
</script>

<style scoped lang="scss">
.v-list-item {
  & &__title {
    line-height: 1.5;
  }
}
</style>
