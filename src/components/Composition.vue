<template>

<div>
  Composition api {{ count }}
</div>
<h1>
  {{ name1 }}
  ,
  {{ y }}
  </h1>
</template>
  
<script setup>
import { ref } from 'vue'
import {useMouse} from './mouse'

// defineProps

// defineOption

const count = ref(1)
function add(){
  count.value++
}

const {x:name1,y} = useMouse()


</script>