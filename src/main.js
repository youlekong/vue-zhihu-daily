import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import * as api from './api'

Vue.config.debug = true
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  saveScrollPosition: true
})

router.map({
  '/': {
    component: require('./views/index')
  },
  'newsList': {
    component: require('./views/newsList')
  },
  'themes': {
    component: require('./views/themes')
  },
  'news/:id': {
    component: require('./views/news')
  },
  '*': {
    component: require('./views/notFound')
  }
})

router.start(App, '#app')

window.Vue = Vue
window.zhihuApi = api
