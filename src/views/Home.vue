<template>
  <BackGround />
  <div class="w-full h-full relative z-10">
    <el-container class="w-full h-full flex flex-row ">
      <el-header class="w-full h-fit">
        <AppHeader v-model:drawer-visible="drawerVisible" v-model:drawer-type="drawerType" />
      </el-header>
      <el-container class="w-full flex-1 flex flex-row ">
        <el-aside class="h-full bg-green-950/80 w-64" :width="curDevice === 'desktop' ? '15rem' : '0'">
          <AppAside v-model:drawer-visible="drawerVisible" v-model:drawer-type="drawerType" />
        </el-aside>
        <el-main class="bg-white/50 rounded-sm p-2 flex-1">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import BackGround from '@/components/common/BackGround.vue';
import AppAside from '@/components/common/AppAside.vue';
import AppHeader from '@/components/common/AppHeader.vue';
import { checkDevice } from '@/utils/checkDevice';

const curDevice = ref('mobile');
onMounted(() => {
  curDevice.value = checkDevice();
});

const drawerVisible = ref(false);
const drawerType = ref('menuList');

</script>