import Vue from 'vue'
import VueRouter from 'vue-router'
import Activity from '@/views/Activity.vue'
import NewPost from '@/views/NewPost.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Activity',
    component: Activity
  },
  {
    path: '/NewPost',
    name: 'NewPost',
    component: NewPost
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
