<template>
  <div :class="필터 + ' filter-item'" :style="`background-image: url(${업로드이미지url})`" @click="필터명mitt">
    <slot name="a"></slot>
  </div>
</template>

<script>
export default {
  props: {
    업로드이미지url: String,
    필터: String
  },
  methods: {
    필터명mitt () {
      this.$emitter.emit('필터명mitt수신', this.필터)
    }
  },
  name: 'filterbox'
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
