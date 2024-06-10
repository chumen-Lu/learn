<template>

  <div>
    视频 {{ videoid }}
  </div>
</template>

<script setup>

import {useRouter,useRoute} from 'vue-router'

const router = useRouter()
console.log(router)
const route = useRoute()
console.log(route)


const {id:videoid} = route.params
</script>