<template lang="pug">
.row.margin-10
  .col
    h3 Works
    dl
      dt tmux-erb-parser
      dd
        .col.md-4 A Tmux plugin to load tmux.conf.erb
        .col.md-4
          a.margin-left-10(href="https://github.com/epaew/tmux-erb-parser" target="_blank") GitHub
          a.margin-left-10(href="https://rubygems.org/gems/tmux-erb-parser" target="_blank") RubyGems.org
</template>

<script>
export default {
  head() {
    return { title: this.$route.name };
  }
};
</script>
