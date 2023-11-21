<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container :데이터목록="데이터목록" :step="step" />
  <button @click="more">더보기</button>
  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
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
  },
};
</script>

<style>
@import "style.css";
</style>
