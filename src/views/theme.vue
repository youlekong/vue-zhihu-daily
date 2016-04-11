<template>
  <div class="banner">
      <span class="icon">←</span>
      <span class="title">{{name}}</span>
  </div>
  <div class="">

  </div>
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

</style>
