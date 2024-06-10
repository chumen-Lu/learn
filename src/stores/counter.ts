
import {defineStore} from 'pinia'
import {ref,computed} from 'vue'
// composition 风格

export const useCounterStore = defineStore('counter',()=>{
  const count = ref(0)
  const doubleCount = computed(()=>count.value*2)
  const increment = ()=>{
    count.value++
  }
  return {
    count,
    doubleCount,
    increment
  }
})

// options风格
// export const countOptionStore = defineStore('counter-option',{
//   state:()=>{
//     return {count:0}
//   },
//   getters:{
//     doubleCount: state=>state.count*2
//   },
//   actions:{
//     increment(){
//       this.count++
//     }
//   }
// })
