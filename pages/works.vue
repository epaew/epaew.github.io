<template lang="pug">
.row.margin-10
  h3 Works
  .container
    dl
      dt tmux-erb-parser
      dd
        .row
          | A Tmux plugin to load tmux.conf.erb
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
