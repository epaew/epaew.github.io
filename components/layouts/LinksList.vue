<template lang="pug">
  v-list
    v-list-group
      template(v-slot:activator)
        v-list-item-title Links
      v-list-item(
        target="_blank"
        v-for="(item, index) in drawerLinks"
        :key="index"
        :href="item.to"
      )
        v-list-item-action
          v-icon(v-if="item.icon") {{ item.icon }}
        v-list-item-content
          v-list-item-title(v-text="item.title")
        v-list-item-action
          v-icon mdi-open-in-new
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      drawerLinks: [
        {
          icon: 'mdi-twitter',
          title: 'Twitter',
          to: 'https://twitter.com/epaew_dev'
        },
        {
          icon: 'mdi-github',
          title: 'GitHub',
          to: 'https://github.com/epaew'
        },
        {
          title: 'Qiita',
          to: 'https://qiita.com/epaew_dev'
        },
        {
          title: 'Hatena Blog',
          to: 'https://epaew.hatenablog.com/'
        }
      ]
    }
  }
})
</script>

<style scoped lang="scss">
.v-list-item {
  min-height: 36px;

  &__action {
    margin-bottom: 6px;
    margin-top: 6px;
  }

  &__content {
    padding-bottom: 6px;
    padding-top: 6px;
  }

  & &__title {
    line-height: 1.5;
  }
}
</style>
