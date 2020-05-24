<template lang="pug">
  v-container
    v-row
      v-col(cols=12 sm=10 offset-sm=1)
        center
          h2.display-2 Welcome
          p This is a personal web page for epaew, a web application developer in Tokyo.
    v-row
      v-col(cols=12 sm=8 offset-sm=2)
        profile-modal(:image-url="imageUrl")
</template>

<script lang="ts">
import Vue from 'vue';
import ProfileModal from '~/components/ProfileModal';

export default Vue.extend({
  components: { ProfileModal },
  async asyncData({ $axios }) {
    const githubUser = await $axios.$get('https://api.github.com/users/epaew');
    return {
      imageUrl: githubUser.avatar_url,
    };
  },
  head() {
    return { title: 'Welcome' };
  },
});
</script>
