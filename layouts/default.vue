<template lang="pug">
  v-app
    v-navigation-drawer(app clipped fixed v-model="isDrawerOpen" :style="{ height: '100%' }")
      v-subheader.headline.font-italic.font-weight-bold Contents
      contents-list
      template(v-slot:append)
        v-divider
        links-list
    v-app-bar(app clipped-left fixed)
      v-app-bar-nav-icon(aria-label="openDrawer" v-if="!isDrawerOpen" @click.stop="toggleDrawer")
      div(v-if="isDrawerOpen" :style="{ height: '48px', width: '48px', marginLeft: '-12px' }")
      v-toolbar-title
        h1 {{ appName }}
    v-content
      nuxt
    v-footer(app absolute inset)
      span
        p.caption Copyright &copy; 2018-{{ currentYear }} {{ appName }}
</template>

<script lang="ts">
import Vue from 'vue';
import { ContentsList, LinksList } from '@/components/layouts';

type DataType = {
  appName: string;
  isDrawerOpen: boolean | null;
};

export default Vue.extend({
  components: { ContentsList, LinksList },
  data(): DataType {
    return {
      appName: 'epaew.net',
      isDrawerOpen: null,
    };
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
  methods: {
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
    },
  },
});
</script>

<style scoped lang="scss">
.v-toolbar__title {
  margin: 0 auto;

  // .v-application--is-ltr .v-toolbar__content > .v-btn.v-btn--icon:first-child + .v-toolbar__title
  padding-left: 20px;
  padding-right: 56px;

  h1 {
    color: #888;
    font-family: 'Allura', cursive;
    font-size: 2.6em;
  }
}

.v-footer {
  justify-content: flex-end;

  // https://github.com/vuetifyjs/vuetify/issues/8128
  &--absolute {
    width: auto;
  }
}
</style>
