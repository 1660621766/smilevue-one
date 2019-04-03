import Vue from 'vue'
import Router from 'vue-router'
import SmileLayout from '@/components/pages/SmileLayout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SmileLayout',
      component: SmileLayout
    }
  ]
})
