<template>
  <div class="banner">
    <div>
      <span v-link="'/newsList'" class="icon">←</span>
    </div>
  </div>
  <div class="vue-content" v-if="!loading">
    <div class="vue-headline">
      <img :src="news.image" alt="标题图片">
      <cite>{{news.title}}</cite>
    </div>
    <link rel="stylesheet" type="text/css" v-for="item in news.css" :href="item"/>
    {{{news.body}}}
  </div>
</template>
<script>
  import * as api from '../api/'
  export default {
    route: {
      data (transition) {
        let newsId = transition.to.params.id
        let self = this
        self.loading = true
        api.getNews(newsId).then(function (result) {
          self.news = result.data
          self.loading = false
        }, function (e) {
          console.warn(e)
        })
      }
    },
    data () {
      return {
        news: null,
        loading: true
      }
    }
  }
</script>
<style>
  .banner {
    height: 3em;
    width: 100%;
    font-size: 18px;
    position: relative;
    z-index: 9999;
  }
  .banner div{
    background-color: #008BED;
    color: #ffffff;
    height: 3em;
    width: 100%;
    line-height:3em;
    padding: 0px 20px;
    position: fixed;
  }
  .banner span {
    padding: 0 5px;
  }
  .vue-content .vue-headline {
    position: relative;
  }
  .vue-content img[alt='标题图片']{
    height: 200px;
    width: 100%;
  }
  .vue-content cite {
    font-size: 1.7em;
    color: black;
    position: absolute;
    bottom: 10px;
    padding: 20px 14px;
    line-height: 1.2em;
  }
  /**
   * change the style of news.body
   */
  .vue-content div.img-place-holder {
    height: 0;
  }
</style>
