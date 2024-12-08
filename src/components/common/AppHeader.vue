<template>
  <div class="w-full h-full flex justify-between items-center">
    <span class="font-bold text-center">
      {{ greatings }}
    </span>
    <!-- Header -->
    <!-- <div class="rounded-full w-10 h-10 bg-blue-200 float-end">
      <font-awesome-icon icon="fa-solid fa-user" />
    </div> -->
    <el-avatar> 用户 </el-avatar>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const greatings = ref('亲爱的牧民，欢迎回来！🌞');
</script>