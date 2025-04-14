<template>
  <BackGround />
  <div class="flex justify-center items-center h-full w-full bg-white z-10">
    <div class="relative isolate px-6 pt-14 lg:px-8 ">
      <div class="h-fit z-20">
        <TabCard />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BackGround from '@/components/common/BackGround.vue';
import TabCard from '@/views/LogReg/LogIn/components/TabCard.vue';
</script>