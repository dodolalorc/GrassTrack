<template>
  <BackGround />
  <div class="w-full h-full relative z-10">
    <el-container class="h-full w-full">
      <el-container class="w-full flex flex-row ">
        <el-aside class="min-h-full w-10 bg-green-950/80" width="280px">
          <AppAside />
        </el-aside>
        <el-container>
          <el-header class="">
            <AppHeader />
          </el-header>
          <el-main class="bg-white/50 rounded-sm m-2">
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import BackGround from '@/components/common/BackGround.vue';
import AppAside from '@/components/common/AppAside.vue';
import AppHeader from '@/components/common/AppHeader.vue';
</script>