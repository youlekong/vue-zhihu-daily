<template>
  <div class="banner">
      <span class="icon">←</span>
      <span class="title">{{name}}</span>
  </div>
  <section v-for="item in stories" v-link="'/news/'+ item.id">
    <h3>{{item.title}}</h3>
    <img :src="item.images[0]" alt="标题图片">
  </section>
</template>

<script>
  import * as api from '../api/'
  export default {
    route: {
      data (transition) {
        let themeId = transition.to.params.id
        console.log(themeId)
        let self = this
        self.loading = true
        api.getTheme(themeId).then(function (result) {
          let data = result['data']
          self.stories = data['stories']
          self.desc = data['description']
          self.name = data['name']
          self.editors = data['editors']
          self.image = data['image']
        })
      }
    },
    data () {
      return {
        stories: null,
        editors: null,
        desc: '',
        image: '',
        name: ''
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

  section {
    height: 5em;
    background-color: #ffffff;
    border: 1px solid #F1E5E5;
    border-radius: 5px;
    margin: 10px;
    padding: 15px;
    position: relative;
  }
  section h3 {
    width: 70%;
    float: left;
    margin: 0;
    font-size: 1.3em;
    line-height: 1.2em;
  }
  section img {
    width: 24%;
    clip: rect(0px,auto,5em,0px);
    position: absolute;
    right: 15px;
  }
</style>
