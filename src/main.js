// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Button ,Row ,Col ,Lazyload ,Swipe, SwipeItem} from 'vant'
import Swiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

Vue.use(Button).use(Row).use(Col).use(Lazyload).use(Swipe).use(SwipeItem).use(Swiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
