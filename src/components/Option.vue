<template>

<div>
  option component {{ name }}
</div>
</template>

<script>
// 可维护性
import {defineComponent} from 'vue'
import nameMixin from './name'
export default defineComponent({
  mixins:[nameMixin,todoListMixin],
  mounted(){
    console.log(this.name)
  },
  data(){
    return {
      name1:"xx"
    }
  },
  methods:{
    changeName1(){

    }
  }
})
</script>