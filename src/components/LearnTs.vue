<template>
  <h1 @click="addCount">{{ count }} * 2= {{ double }}</h1>
  <input ref="input" type="text" v-model="val" />
  <button @click="add">click</button>
  <div>
    <ul>
      <!-- <li v-for="c in course">{{ c.name }}</li> -->
    </ul>
  </div>
</template>
<script setup lang="ts">
// @fn
// class App extends React.Component{}
// import nameMixin
import { ref, onMounted, computed, withDefaults } from 'vue'

// const obj = reactive<Course>({
//   name:'vue3',
//   price:100
// })
interface IProps {
  title?: string
  price?: number
}

withDefaults(defineProps<IProps>(), {
  title: '默认标题',
  price: 100
})

interface Course {
  name: string
  price: number
}
let val = ref('')
let count = ref(1)
let double = computed(() => count.value * 2)
let course = ref<Course[]>([])
let input = ref<HTMLInputElement | null>(null)

function add(event: Event) {
  console.log(event)
  course.value.push({
    name: val.value + count.value,
    price: count.value
  })
  count.value++
}
function addCount() {
  count.value++
}
onMounted(() => {
  input.value?.focus()
})
</script>
