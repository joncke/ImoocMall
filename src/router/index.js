import Vue from 'vue'
import Router from 'vue-router'
import GoodList from '@/views/GoodList.vue'
import Title from '@/views/Title'
import Image from './../views/Image.vue'

Vue.use(Router);

export default new Router({
  mode:"hash",
  routes: [
    {
      path: '/goods',
      name: 'GoodList',
      component: GoodList,
      children:[
        {
          path:'title',
          name:'title',
          component:Title
        },
        {
          path:'image',
          name:'image',
          component:Image
        }
      ]
    }
  ]
})
