
<script>
'use antfu'
const num = ref(1)
const store = useLocalStorage(
  'my-storage',
  {
    name: 'Apple',
    color: 'red',
  },
)
</script>
<template>
  <div m2 flex justify-center text-2xl op30 hover="op80">
  <a
    i-carbon-logo-github
    text-inherit
    href="https://github.com/unocss/unocss"
    target="_blank"
  ></a>
</div>
</template>
