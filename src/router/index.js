import Vue from 'vue'
import Router from 'vue-router'
// import GoodList from '@/views_old/GoodList.vue'
// import Title from '@/views_old/Title'
// import Image from '../views_old/Image.vue'
// import Cart from '@/views_old/Cart'
import GoodsList from '@/views/GoodsList';


Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    component: GoodsList
  }]

})


//
// export default new Router({
//   // mode:"hash",
//   routes: [
//     {
//       path: '/',
//       name: 'GoodList',
//       //component: GoodList
//       // children:[
//       //   {
//       //     path:'title',
//       //     name:'title',
//       //     component:Title
//       //   },
//       //   {
//       //     path:'image',
//       //     name:'image',
//       //     component:Image
//       //   }
//       // ]
//       components:{
//         default:GoodList,
//         title:Title,
//         image:Image
//       }
//     },
//     {
//       path:'/cart/:cartId',
//       name:'cart',
//       component:Cart
//     }
//   ]
// })
