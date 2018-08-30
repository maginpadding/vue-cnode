import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import Content from '@/page/content'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }, {
      path: '/content/:id',
      component: Content
    }
  ]
})
