import Vue from 'vue'
import Router from 'vue-router'
import ViewContainer from '@/view/ViewContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'view-container',
      component: ViewContainer,
    },
  ],
})
