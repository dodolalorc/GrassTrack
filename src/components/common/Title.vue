<template>
  <div class="flex flex-row items-center">
    <h1 class="text-2xl font-bold text-gray-800">
    {{ title }}
    </h1>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const title = ref('Title');
</script>