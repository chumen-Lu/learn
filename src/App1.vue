<template>
  <div class="container">
    <!-- <h1 @click="add">hello world {{ count }}</h1>
    <button class="btn"> click me</button>
    <div v-html="Logo">
    </div>
    <LearnTs title="学vue3" />
    <LearnTs /> -->
    <!-- <img :src="Logo" alt=""> -->

    <!-- <OptionComp /> -->

    <CompositonComp />
  </div>
</template>

<script setup lang="ts">
// import {ref} from 'vue'
// import Logo from './assets/vue.svg?raw'
// import OptionComp from './components/Option.vue'
// import CompositonComp from './components/Composition.vue'
// import LearnTs from './components/LearnTs.vue'

// console.log(123,Logo)
// const count = ref(100)
// function add(){
//   count.value++
// }

</script>

<style lang="scss">
$primary-color:red;
$font-size: 20px;

.btn{
  color: $primary-color;
  font-size: $font-size;
}
</style>
