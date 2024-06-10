import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import './main.css'


import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes
})
app.use(router)
app.use(createPinia())
app.mount('#app')

// console.log(import.meta.env.VITE_NAME)

// const BASE_URL = import.meta.env.VITE_BASE_URL

// fetch(BASE_URL+'/api/user')

// let name:string = 'vue3'
// let num:number = 1
// let isVue3:boolean = true
// let timer:null = null

// let arr:number[] = [1,2,3]
// arr.push(4)
// let arr1:[number,string] = [1,'2']
// // arr.push('vue3')

// name = 1

// obj.xx = 1

// import type {Course} from './types/main'
// let obj:Course = {
//   name:"bilibili",
//   price:400,
//   isOnLine:false,
//   students:['大圣','蜗牛']
// }

// let obj1:Course = {
//   name:"bilibili",
//   price:400,
//   isOnLine:false,
//   students:['大圣','蜗牛'],
//   desc:'课程简介'
// }

// let arg :number|string = 1
// arg = 'vue3'

// let anyArg:any  //跟js一样了，甚至丧失了自带的类型推导

// // 基础入门
// // 函数类型
// // 函数和函数的参数，本质上也是一个变量

// function add(a:number,b:number):number{
//   return a+b
// }

// interface AddFn {
//   (a:number,b:number):number
// }
// const add1:AddFn = (a,b)=>{
//   return a+b
// }

// type addFn2 = (a:number,b:number)=>number
// const add2:addFn2 = (a,b)=>{
//   return a+b
// }
// add(1,2)
// add(1,'2')
// add1('1',2)
// add1(1,2)
// add2(1,2)
// add2('1',2)
// // 简单的泛型
// // 不建议大家研究太高端的类型体操

// function noop(arg:any):any{
//   return arg+""
// }

// function noop1<T>(arg:T):T{
//   return arg
// }
// let a = noop(1)
// let b = noop1('vue3')

// function getProperty<T,K extends keyof T>(obj:T,name:K):T[K]{
//   return obj[name]
// }

// // let args2:'price'|"nuber" = 'pric'
// let obj2:Course = {
//   name:"bilibili",
//   price:400,
//   isOnLine:false,
//   students:['大圣','蜗牛']
// }
// let name1 = getProperty(obj2,'name')
// let proce1 = getProperty(obj2,'price')
// let proce2 = getProperty(obj2,'bilibili')
// 宿主的类型

// let w:Window = window
// // w.open1()
// const ele:HTMLElement = document.createElement('div')
// // ele.sty
// ele.addEventListener('click',function(e:MouseEvent){

// },false)

// 1. 变量的类型是什么
// 2. vue的组件是啥类型 ，借助vue对外暴露的类型来做
// 3. 浏览器内部的div是啥类型

// import { computed, defineComponent } from 'vue'

// const Comp = defineComponent({
//   props: {
//     a: {
//       type: Number,
//       required: true,
//     },
//   },
//   setup(props) {
//     const a = computed(() => props.a + ':') // same name with prop
//     return {
//       a,
//     };
//   },
// });

// cosnt a = (new Comp()).a; // never
