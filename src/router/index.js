import Vue from 'vue'
import Router from 'vue-router'
import ViewContainer from '@/view/ViewContainer'
import ViewTest from '@/view/ViewTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'view-container',
      component: ViewContainer,
    },
    {
      path: '/test',
      name: 'view-test',
      component: ViewTest,
    },
  ],
})
