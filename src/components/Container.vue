<template>
  <div>
    <!-- 저번시간 까지 -->
    <div v-if="step == 0">
      <Post
        v-for="(게시물, index) in 데이터목록"
        :key="index"
        :게시물="게시물"
      />
    </div>

    <!-- 필터선택페이지 -->
    <div v-if="step == 1">
      <div :class="보여질적용필터 + ' filter-item'" class="upload-image" :style="`background-image: url(${업로드이미지url})`"></div>
      <div class="filters">
        <FilterBox :필터="필터" :업로드이미지url="업로드이미지url" v-for="필터 in 필터들" :key="필터">
          <template v-slot:a> {{필터}} </template>
        </FilterBox>
      </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step == 2">
      <div :class="보여질적용필터 + ' filter-item'" class="upload-image" :style="`background-image: url(${업로드이미지url})`"></div>
      <div class="write">
        <textarea v-model="발행내용" @change="발행내용전송" class="write-box" placeholder="write!"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue"
export default {
  data() {
    return {
      데이터목록: this.데이터목록,
      필터들 : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
"inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
"reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
      보여질적용필터 : "",
    };
  },
  components: {
    Post,
    FilterBox,
  },
  props: {
    데이터목록: Array,
    step: Number,
    업로드이미지url: String,
  },
  methods: {
    발행내용전송() {
      this.$emit('발행내용전송', this.발행내용);
    }
  },
  mounted() {
    this.$emitter.on('필터명mitt수신', (필터) => {
      this.보여질적용필터 = 필터;
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
