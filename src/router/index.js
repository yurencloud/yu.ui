import Vue from 'vue'
import Router from 'vue-router'
import ViewContainer from '@/view/ViewContainer'
import ViewContainer2 from '@/view/ViewContainer2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'view-container',
      component: ViewContainer,
    },
    {
      path: '/2',
      name: 'view-container2',
      component: ViewContainer2,
    },
  ],
})
