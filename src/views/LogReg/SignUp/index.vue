<template>
  <BackGround />
  <div class="flex justify-center items-center h-full w-full">
    <div class="bg-white/90 z-10 rounded-2xl px-6 py-2 w-2/5">
      <div class="w-full h-fit flex justify-center items-center">
        <div class="w-fit">
          <div class="text-2xl font-extrabold text-center flex justify-center items-center mx-2">
            <el-image src="/src/assets/icon.svg" class="w-12" />
            <span class="h-full w-full">
              {{ title }}
            </span>
          </div>
          <div class="w-full h-full max-w-md px-2 py-4 sm:px-0 text-center">
            {{ greeting }}
          </div>
        </div>
      </div>

      <div class="w-full h-fit">
        <RegisterForm />
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BackGround from "@/components/common/BackGround.vue";
import RegisterForm from "./cards/RegisterForm.vue";

const title = ref("草畜平衡决策预警系统");
const greeting = ref("欢迎注册使用本系统！");
</script>