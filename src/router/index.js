import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TextScreen from '@/components/TextScreen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TextScreen',
      component: TextScreen
    }
  ]
})
