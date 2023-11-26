<template>
  <div class="header">
    <ul class="header-button-left">
      <li v-if="step != 0">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step != 2 && step != 0" @click="step += 1">Next</li>
      <li v-if="step == 2" @click="발행" >발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container
    :데이터목록="데이터목록"
    :step="step"
    :업로드이미지url="업로드이미지url"
    @발행내용전송="발행내용전송수신"
  />

  <button @click="more" v-if="step == 0">더보기</button>

  <div class="footer" v-if="step == 0">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" multiple="true" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import { tSMethodSignature, thisTypeAnnotation } from "@babel/types";
import Data from "./assets/data.js";
import Container from "./components/Container.vue";
import axios from "axios";

// @ is an alias to /src
export default {
  data() {
    return {
      발행내용: "",
      업로드이미지url: "",
      step: 0,
      데이터목록: Data,
      더보기클릭횟수: 0,
    };
  },
  components: {
    Container,
  },
  methods: {
    more() {
        axios
          .get(`https://codingapple1.github.io/vue/more${this.더보기클릭횟수}.json`)
          .then((result) => {
            this.데이터목록.push(result.data);
            this.더보기클릭횟수 += 1;
          });
    },
    upload(e) {
      let 업로드파일 = e.target.files;
      let url = URL.createObjectURL(업로드파일[0]);
      this.step += 1;
      this.업로드이미지url = url;
      console.log(url);
    },
    발행() {
      var 내게시물 = {
        name: "Kim Hyuk",
        userImage: "https://picsum.photos/100?random=3",
        postImage: this.업로드이미지url,
        likes: 0,
        date: "May 15",
        liked: false,
        content: this.발행내용,
        filter: "perpetua"
      };
      this.데이터목록.unshift(내게시물);
      this.step = 0;
      this.업로드이미지url = "";
      this.발행내용 = "";
    },
    발행내용전송수신(content) {
      this.발행내용 = content;
    }
  },
};
</script>

<style>
@import "style.css";
</style>
