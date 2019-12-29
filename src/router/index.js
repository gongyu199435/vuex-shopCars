import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 导入组件
import Login from '../views/login/login.vue'
const routes = [{
  path: '/login',
  component: Login
},
{
  path:'/car',
  component:()=>import('../views/car/cars.vue')
}
]

const router = new VueRouter({
  routes
})

export default router