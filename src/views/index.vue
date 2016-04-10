<template>
  <div class="container">
    <img :class="picChange?'pic-change':'pic'" alt="" :src="img"
         src='https://pic3.zhimg.com/2d16f25c61e0323babf2f8ff5eb94d9f.jpg'>
    <label class="lb">{{text}}</label>
  </div>
</template>

<script>
  import * as api from '../api'
  export default {
    data () {
      return {
        img: '',
        text: '',
        picChange: false
      }
    },
    ready () {
      let vm = this
      this.getData().then(function (data) {
        var ob = data.data
        vm.img = ob.img
        vm.text = ob.text
        vm.picChange = true
      })
      setTimeout(function () {
        vm.$route.router.go({path: 'newsList'})
      }, 4000)
    },
    methods: {
      getData () {
        return api.getStartImg()
      }
    }
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }
</style>
<style scoped>
  .container {
    width: 100%;
    height: 100%;
    text-align: center;
    position: relative;
  }
  .pic {
    width: 100%;
    height: 100%;
  }
  .pic-change {
    width: 110%;
    height: 110%;
    transition: all 3.5s;
  }
  .lb {
    height: 20px;
    width: 100%;
    position: absolute;
    left: 0.1px;
    bottom: 20px;
    color: #9da0a4;
  }
</style>
