<template>

  <div @click="changeVal">
    关于页面, {{ val }}
  </div>
  <div>
    <a-button @click="store.increment">{{ store.count }}</a-button>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {useCounterStore} from '@/stores/counter'
// import axios from 'axios'


const store = useCounterStore()

const val = ref(1)
function changeVal(){
  val.value++
}
</script>