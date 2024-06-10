<template>
  <div>
    <h1>title</h1>
    <h2>{{ realRate }}</h2>
    <Button @click="getRate">getRate</Button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    data() {
        return {
            emojiStr: '🙂🙂🙂🙂🙂😒😒😒😒😒',
            rateValue: 1
        }
    },
    methods: {
        getRate() {
            console.log(this.rateValue)
        }
    },
    computed: {
        realRate() {
            return this.emojiStr.slice(10-this.rateValue*2, 20-this.rateValue*2)
        }
    }
});
</script>

<style>

</style>