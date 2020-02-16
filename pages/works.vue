<template lang="pug">
.row.margin-10
  .col
    .row.sm-margin-x-0
      h3 Works
    dl
      dt tmux-erb-parser
      dd: .col
        .md-8 A Tmux plugin to load tmux.conf.erb
        .md-4
          a.margin-left-10(href="https://github.com/epaew/tmux-erb-parser" target="_blank") GitHub
          a.margin-left-10(href="https://rubygems.org/gems/tmux-erb-parser" target="_blank") RubyGems.org
      dt ecg
      dd: .col
        .md-8 ERB(eRuby) based, simple and powerful configration file generator for general purpose.
        .md-4
          a.margin-left-10(href="https://github.com/epaew/ecg" target="_blank") GitHub
          a.margin-left-10(href="https://rubygems.org/gems/ecg" target="_blank") RubyGems.org
</template>

<script>
import TransitionMixin from "@/lib/transition-mixin.js";

export default {
  mixins: [TransitionMixin],
  head() {
    return { title: this.$route.name };
  }
};
</script>
