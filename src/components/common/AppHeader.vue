<template>
  <div class="w-full h-full flex justify-between items-center">
    <div class="text-2xl font-extrabold">
      {{ title }}
    </div>
    <div class="flex h-full justify-center items-center">
      <span class="font-bold text-center text-xl pr-6">
        {{ greatings }}
        <font-awesome-icon icon="fa-solid fa-sun" style="color: #FFD43B;" />
      </span>
      <div>
        <el-avatar size="large" :src="avatar" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import avatar from '@/assets/img/avatar.jpg';
const title = ref('草畜平衡决策预警系统');
const greatings = ref('亲爱的牧民，欢迎回来！');
</script>