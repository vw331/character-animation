import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TextScreen from '@/components/TextScreen'
import TextInput from '@/components/TextInput'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path: '/',
  		name: 'TextInput',
  		component: TextInput
  	},
    {
      path: '/output',
      name: 'TextScreen',
      component: TextScreen
    }
  ]
})
