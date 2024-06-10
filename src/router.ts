import { createRouter, createWebHistory } from 'vue-router'

const routes: any = [
  // 同步的路由 登录和首页  其他的可以考虑lazyload
]

const modules = import.meta.glob('./pages/*.vue', { eager: true })
Object.keys(modules).forEach((key) => {
  // @todo 考虑以后文件的嵌套
  const module = {
    // @todo需要考虑路径的处理 通用的，而且以后文件夹还有嵌套
    path: '/' + key.split('/').pop().split('.')[0].toLowerCase(),
    component: modules[key]
  }
  routes.push(module)
})

console.log(routes)
// import Home from './pages/Home.vue'
// import Login from './pages/Login.vue'
// import Video from './pages/Video.vue'

// const routes = [
//   // 访问的路径和显示组件的映射关系
//   { path: '/', component: Home },
//   { path: '/login', component: Login },

//   { path: '/about', component: ()=>import('./pages/About.vue') },
//   { path: '/video/:id', component: Video },

// ]

const router = createRouter({
  routes,
  history: createWebHistory()
})
export default router
