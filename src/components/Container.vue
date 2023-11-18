<template>
  <div>
    <Post />
    <Post />
    <Post />
  </div>
</template>

<script>
import Post from './Post.vue';
export default {
  components: {
    Post,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
