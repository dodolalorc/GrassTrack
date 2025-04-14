<template>
  <div class="flex justify-center items-center w-full py-2">
    <div class="h-0.5 w-24 bg-black"></div>
    <h1 class="text-center font-bold text-lg justify-self-center mx-5">
      {{ title }}
    </h1>
    <div class="h-0.5 w-24 bg-black"></div>
  </div>
</template>

<script setup lang="ts">

const title = defineModel('title', {
  type: String,
  default: 'Title',
})
</script>