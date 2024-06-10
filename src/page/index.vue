<template>
  <div>
    首页Header | <router-link to="/login">登录</router-link> |
    <router-link to="/about">关于</router-link> | <router-link to="/comment">评论</router-link> |
    <!-- <router-link to="/video/video1">视频1</router-link> |
      <router-link to="/video/video2">视频2</router-link> | -->
    <div>
      <a-button @click="store.increment">{{ store.count }} * 2 = {{ store.doubleCount }}</a-button>
    </div>

    <a-button @click="sayHi" type="primary">Primary Button</a-button>

    <div>
      <a-alert message="Success Text" type="success" />
      <a-alert message="Info Text" type="info" />
      <a-alert message="Warning Text" type="warning" />
      <a-alert message="Error Text" type="error" />
    </div>
  </div>
  <!-- /dashborad/.. -->
  <div>
    <router-view></router-view>
  </div>
  <div>Footer</div>
</template>

<script setup lang="ts">
import { userHi } from '@/api/user'
import { useCounterStore } from '@/stores/counter'
// import axios from 'axios'

const store = useCounterStore()

// const {count,doubleCount} = store

console.log(userHi)

async function sayHi() {
  const data = await userHi()
  console.log(data.name)
}

// userHi().then(res=>{
//   console.log(res)
// })
// axios.get('/api/user/hi')
// fetch('/api/user/hi',{
//   headers:{
//     apikey:import.meta.env.VITE_API_KEY
//   }
// }).then(res=>res.json()).then(res=>{
//   console.log(res)
// })
</script>
