<template lang="pug">
  v-container
    v-row
      v-col(cols=12 sm=10 offset-sm=1)
        center
          h2.display-2 Works
    v-row(no-gutters)
      v-col(cols=12 sm=10 offset-sm=1)
        v-row(v-for="work in works" key="work.title")
          v-col
            v-card(outlined)
              v-card-title.headline {{ work.title }}
              v-card-subtitle.subtitle-1 {{ work.description }}
              v-card-actions
                v-btn(v-for="link in work.links" key="link.label" :href="link.href" target="blank" text v-text="link.label")
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      works: [
        {
          title: 'react-liff',
          description: 'A react context provider for LIFF (LINE Front-end Framework)',
          links: [
            {
              label: 'npmjs.com',
              href: 'https://www.npmjs.com/package/react-liff',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/epaew/react-liff',
            },
            {
              label: 'Demo App',
              href: 'https://liff.line.me/1654340399-ME0xEG8k',
            },
          ],
        },
        {
          title: 'eslint-plugin-filenames-simple',
          description: 'An ESLint plugin to check filenames with simple configuration.',
          links: [
            {
              label: 'npmjs.com',
              href: 'https://www.npmjs.com/package/eslint-plugin-filenames-simple',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/epaew/eslint-plugin-filenames-simple',
            },
          ],
        },
        {
          title: 'ecg',
          description: 'ERB(eRuby) based, simple and powerful configration file generator for general purpose.',
          links: [
            {
              label: 'RubyGems.org',
              href: 'https://rubygems.org/gems/ecg',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/epaew/ecg',
            },
          ],
        },
        {
          title: 'tmux-erb-parser',
          description: 'A Tmux plugin for loading tmux.conf written in Ruby (eRuby) notation.',
          links: [
            {
              label: 'RubyGems.org',
              href: 'https://rubygems.org/gems/tmux-erb-parser',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/epaew/tmux-erb-parser',
            },
          ],
        },
      ],
    };
  },
  head() {
    return { title: 'Works' };
  },
});
</script>
