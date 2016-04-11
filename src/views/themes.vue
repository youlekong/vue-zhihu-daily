<template>
  <section id="sideBar" class="nav-list"
           :class="showMenu?'hide-menu':'show-menu'"
           @click="clickEvent">
    <ul class="list-ul">
      <li v-for="theme in themes">
        <span class="title">{{theme.name}}</span>
        <i class="icon">+</i>
      </li>
    </ul>
  </section>
</template>
<script>
  import * as api from '../api/'
  export default {
    route: {
      data (transition) {
        let self = this
        api.getThemes().then(function (result) {
          self.themes = result.data.others
          self.themes = Array.prototype.slice.call(self.themes)
//          console.log(Object.prototype.toString.call(self.themes))
          let ob = {
            'color': '',
            'thumbnail': '',
            'description': '',
            'id': '',
            'name': '首页'
          }
          self.themes.splice(0, 0, ob)
        }, function (e) {
          console.warn(e)
        })
      }
    },
    data () {
      return {
        themes: null,
        showMenu: true
      }
    },
    methods: {
      clickEvent () {
        this.showMenu = !this.showMenu
      }
    }
  }
</script>
<style scoped>
  .nav-list {
    width: 50%;
    height: 100%;
    background-color: #34495C;
    position: relative;
    left: 0;
  }
  .list-ul {
    list-style: none;
    padding-top: 10px;
    padding-bottom: 100%;
  }
  .title {
    color: #9da0a4;
    height: 30px;
    line-height: 30px;
    margin: 10px;
  }
  .icon {
    color: #9da0a4;
    position: absolute;
    right: 5%;
    height: 30px;
    line-height: 30px;
  }
  .show-menu {
    transition: left 0.5s ease-out;
    left: -40%;
  }
  .hide-menu {
    transition: left 0.5s ease-in;
    left: 0;
  }
</style>
