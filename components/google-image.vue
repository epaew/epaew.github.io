<template>
  <img :src="src_url">
</template>

<script>
export default {
  props: {
    imageId: { type: String, required: true }
  },
  data() {
    return {
      src_url: `https://drive.google.com/uc?export=view&id=${this.imageId}`
    };
  }
};
</script>
