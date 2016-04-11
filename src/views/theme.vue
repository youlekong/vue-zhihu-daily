<template>
  <div class="banner">
      <span class="icon">←</span>
      <span class="title">{{title}}</span>
  </div>
</template>

<script>
//  import * as api from '../api/'
  export default {
    route: {

    },
    data () {
      return {
        title: 'moren'
      }
    }
  }
</script>

<style scoped>
  /**
   header
  */
  .banner {
    height: 3em;
    line-height: 3em;
    width: 100%;
    position: relative;
    z-index: 9999;
    background-color: #008bed;
    color: #ffffff;
    padding: 0 5px;
    font-size: 18px;
  }
  .banner .icon {
  }
  .banner .title {
  }

</style>
