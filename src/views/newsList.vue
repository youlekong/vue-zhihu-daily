<template>
  <div class="banner">
    <div>
      <span class="icon" v-link="{path: 'themes'}">三</span>
      <span>首页</span>
    </div>
  </div>
  <div class="top" v-if="!loading" v-link="'/news/'+ list.top_stories[carousel].id">
    <img :src="list.top_stories[carousel].image" alt="top-stories">
    <cite>{{list.top_stories[carousel].title}}</cite>
    <div class="slick-dots">
      <div>
        <span v-for="(index,item) in list.top_stories">
          <button :class="index===carousel?'active':''">●</button>
        </span>
      </div>
    </div>
  </div>
  <div class="content" v-if="!loading">
    <h4>今日新闻</h4>
    <section v-for="item in list.stories" v-link="'/news/'+ item.id">
      <h3> {{ item.title }} </h3>
      <img :src="item.images[0]" alt="标题图片">
    </section>
  </div>
</template>
<script>
  import * as api from '../api/'
  export default {
    route: {
      data (transition) {
        let self = this
        this.carousel = -1
        this.loading = true
        api.getLatestNews().then(function (result) {
          /* for dev */
//          var top = result.data.top_stories
//          for (var i = 0; i < top.length; i++) {
//            top[i].image = '/static/a.jpg'
//          }
          self.list = result.data
          self.loading = false
          self.carousel += 1
        }, function (e) {
          console.warn(e)
        })
      }
    },
    data () {
      return {
        list: null,
        loading: true,
        carousel: -1
      }
    },
    watch: {
      carousel () {
        if (this.loading) {
          clearTimeout()
          return
        }
        let self = this
        setTimeout(function () {
          self.carousel = (self.carousel + 1) % self.list.top_stories.length
        }, 2000)
      }
    }
  }
</script>

<style scoped>
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
  .top {
    width: 100%;
    height: 16em;
    position: relative;
  }
  .top img {
    width: 100%;
    position: absolute;
    clip: rect(5em,auto,21em,0);
    margin-top: -5em;
  }
  .top cite {
    position: absolute;
    bottom: 0;
    font-size: 1.7em;
    color: white;
    padding: 20px 14px;
    line-height: 1.2em;
  }
  .top .slick-dots {
    display: block;
    position: absolute;
    bottom:0;
    right: 0;
    left: 0;
  }
  .top .slick-dots div {
    text-align: center;
  }
  .top .slick-dots button {
    background-color: transparent;
    padding: 1px;
    border: none;
    color: rgba(150,150,150,0.8);
  }
  .top .slick-dots button.active {
    color: #ffffff;
  }
  .content {
    background-color: #fafafa;
    margin: 0;
    padding: 0 0 10px 0;
  }
  .content h4 {
    margin: 0;
    padding: 15px 0 10px 15px;
    color: #999999;
  }
  .content section {
    height: 5em;
    background-color: #ffffff;
    border: 1px solid #F1E5E5;
    border-radius: 5px;
    margin: 10px;
    padding: 15px;
    position: relative;
  }
  .content section h3 {
    width: 70%;
    float: left;
    margin: 0;
    font-size: 1.3em;
    line-height: 1.2em;
  }
  .content section img {
    width: 24%;
    clip: rect(0px,auto,5em,0px);
    position: absolute;
    right: 15px;
  }
</style>

