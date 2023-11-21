<template>
  <div>
    <!-- 저번시간 까지 -->
    <Post v-for="(게시물, index) in 데이터목록" :key="index" :게시물="게시물" />

    <!-- 필터선택페이지 -->
    <div class="upload-image"></div>
    <div class="filters">
      <div class="filter-1"></div>
      <div class="filter-1"></div>
      <div class="filter-1"></div>
      <div class="filter-1"></div>
      <div class="filter-1"></div>
    </div>

    <!-- 글작성페이지 -->
    <div class="upload-image"></div>
    <div class="write">
      <textarea class="write-box">write!</textarea>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
export default {
  data() {
    return {
      데이터목록: this.데이터목록,
    };
  },
  components: {
    Post,
  },
  props: {
    데이터목록: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
