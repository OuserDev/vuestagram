<template>
  <div class="header">
    <ul class="header-button-left">
      <li v-if="step != 0" @click="취소">Cancel</li>
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
  {{ $store.state.more }}
  <button @click="$store.dispatch('getData')" >더보기2</button>
  <p> {{ name }} {{ age }} {{  }}</p>
  <div class="footer" v-if="step == 0">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" multiple="true" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import { tSMethodSignature, thisTypeAnnotation } from '@babel/types'
import Data from './assets/data.js'
import Container from './components/Container.vue'
import axios from 'axios'
import { mapState } from 'vuex'

// @ is an alias to /src
export default {
  data () {
    return {
      발행내용: '',
      업로드이미지url: '',
      step: 0,
      데이터목록: Data,
      더보기클릭횟수: 0,
      발행시적용필터: '',
      카운터: 0
    }
  },
  components: {
    Container
  },
  computed: {
    name () {
      return this.$store.state.name
    },
    ...mapState(['name', 'age', 'likes'])
  },
  methods: {
    now () {
      return new Date()
    },
    more () {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.더보기클릭횟수}.json`)
        .then((result) => {
          this.데이터목록.push(result.data)
          this.더보기클릭횟수 += 1
        })
    },
    upload (e) {
      const 업로드파일 = e.target.files
      const url = URL.createObjectURL(업로드파일[0])
      this.step += 1
      this.업로드이미지url = url
      console.log(url)
    },
    취소 () {
      this.step = 0
      this.$router.go(-2)
    },
    발행 () {
      const 내게시물 = {
        name: 'Kim Hyuk',
        userImage: 'https://picsum.photos/100?random=3',
        postImage: this.업로드이미지url,
        likes: 0,
        date: 'May 15',
        liked: false,
        content: this.발행내용,
        filter: this.발행시적용필터
      }
      this.데이터목록.unshift(내게시물)

      this.step = 0
      this.업로드이미지url = ''
      this.발행내용 = ''
      this.발행시적용필터 = ''
    },
    발행내용전송수신 (content) {
      this.발행내용 = content
    }
  },
  mounted () {
    this.$emitter.on('필터명mitt수신', (필터) => {
      this.발행시적용필터 = 필터
    })
  }
}
</script>

<style>
@import "style.css";
</style>
