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

  <Container :데이터목록 = "데이터목록"/>

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import Data from './assets/data.js';
import Container from './components/Container.vue';
// @ is an alias to /src
export default {
  data() {
    return {
      데이터목록: Data
    }
  },
  components: {
    Container,
  },
};
</script>

<style>
@import 'style.css';
</style>
