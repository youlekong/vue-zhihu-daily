import Vue from 'vue'
import * as endpoint from './endpoint'

export function getStartImg () {
  return Vue.http.get(endpoint.START_IMG)
}

export function getLatestNews () {
  return Vue.http.get(endpoint.LATEST_NEWS)
}

export function getNews (id) {
  return Vue.http.get(endpoint.NEWS + id)
}

export function getStoryExtra (id) {
  return Vue.http.get(endpoint.STORY_EXTRA + id)
}

export function getThemes () {
  return Vue.http.get(endpoint.THEMES)
}

export function getTheme (id) {
  return Vue.http.get(endpoint.THEME + id)
}

