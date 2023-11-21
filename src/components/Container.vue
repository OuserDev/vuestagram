<template>
  <div>
    <Post v-for="(게시물, index) in 데이터목록" :key="index" :게시물="게시물"/>
  </div>
</template>

<script>
import Post from './Post.vue';
export default {
  data() {
    return {
      데이터목록: this.데이터목록,
    }
  },
  components: {
    Post,
  },
  props: {
    데이터목록: Array,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
