<template>
  <section id="sideBar" class="nav-list"
           :class="menu?'hide-menu':'show-menu'"
           @click="clickEvent">
    <!--userInfo-->
    <div class="user-info">
      <img src="#" class="user-img">
      <span class="user-name">请登录</span>
    </div>
    <!-- accessory -->
    <ul class="list-accessory" v-for="acc in accessories">
      <li class="acc-list">
        <i class="pic">:-D</i>
        <span class="title">{{acc.title}}</span>
      </li>
    </ul>
    <!-- themes -->
    <div class="list-theme">
      <div v-for="theme in themes" v-link="'/theme/'+theme.id">
        <span class="name">{{theme.name}}</span>
        <i class="icon">+</i>
      </div>
    </div>
  </section>
</template>
<script>
  import * as api from '../api/'
  export default {
    ready () {
      this.getData()
    },
    data () {
      return {
        themes: null,
        accessories: [
          {'title': '收藏', 'img': '#'},
          {'title': '消息', 'img': '#'},
          {'title': '设置', 'img': '#'}
        ]
      }
    },
    props: {
      menu: false
    },
    methods: {
      clickEvent () {
        this.menu = !this.menu
      },
      getData () {
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
    watch: {
      'menu': function (val) {
        this.menu = val
      }
    }
  }
</script>
<style scoped>
  .nav-list {
    width: 50%;
    height: 100%;
    background-color: #34495C;
    /*position: relative;*/
    position: fixed;
    left: 0;
    z-index: 10000;
  }
  /**
  userInfo
  */
  .user-info {
    width: 100%;
    height: 60px;
    position: relative
  }
  .user-info .user-img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    padding-top: 10px;
    padding-left: 10%;
  }
  .user-info .user-name {
    position: absolute;
    left: 80px;
    top: 50%;
    transform: translate(0, -50%);
    width: 200px;
    height: 10px;
    line-height: 10px;
    color: #9da0a4;
    vertical-align: middle;
    display: inline-block;
  }
  /**
    accessory
  */
  .list-accessory {
    list-style: none;
    display: inline-block;
    width: 30%;
    text-align: center;
  }
  .acc-list {
    color: #9da0a4;
    height: 40px;
  }
  .acc-list .pic {
    display: block;
  }
  .acc-list .title {
    font-size: 11px;
  }
  /**
   theme
  */
  .list-theme {
    list-style: none;
    padding-top: 10px;
    padding-bottom: 100%;
  }
  .list-theme .name {
    color: #9da0a4;
    height: 30px;
    line-height: 30px;
    margin-left: 10%;
  }
  .list-theme .icon {
    color: #9da0a4;
    position: absolute;
    right: 10%;
    height: 30px;
    line-height: 30px;
  }
  /** nav-list */
  .show-menu {
    transition: left 0.5s ease-out;
    left: -50%;
  }
  .hide-menu {
    transition: left 0.5s ease-in;
    left: 0;
  }
</style>
