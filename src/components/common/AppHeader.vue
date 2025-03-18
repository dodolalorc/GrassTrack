<template>
  <div class="w-full h-full flex justify-between items-center">
    <div class="text-2xl font-extrabold hover:cursor-pointer" @click="handleClickTitle">
      <SiteTitle />
    </div>
    <div class="flex h-full justify-center items-center">
      <span v-if="curDevice !== 'mobile'" class="font-bold text-center text-xl pr-6">
        亲爱的牧民，欢迎回来！
      </span>
      <div class="px-5 md:px-10 avatar-container relative">
        <el-dropdown v-if="curDevice === 'desktop'" :hide-on-click="false" @command="handleCommand">
          <el-avatar size="large" :src="avatar" class="hover:scale-150 transition duration-500 hover:cursor-pointer" />
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="profile">个人信息</el-dropdown-item>
              <el-dropdown-item command="account">账号信息</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <div v-else>
          <el-avatar size="large" :src="avatar" class="hover:scale-150 transition duration-500 hover:cursor-pointer"
            @click="handleClickAvatar" />
        </div>
      </div>
    </div>
  </div>

  <infoCard v-model:current-tab="currentTab" v-model:dialog-visible="dialogVisible" />

</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import SiteTitle from './SiteTitle.vue';
import { checkDevice } from '@/utils/checkDevice';
import avatar from '@/assets/img/avatar.jpg';
import { useRouter } from 'vue-router';
import infoCard from '../infoDialogCard/infoCard.vue';

const router = useRouter();

const curDevice = ref('mobile');
onMounted(() => {
  curDevice.value = checkDevice();
});

const drawerVisible = defineModel('drawerVisible', {
  default: false,
  type: Boolean,
});
const drawerType = defineModel('drawerType', {
  default: 'menuList',
  type: String,
});

const handleClickTitle = () => {

  if (curDevice.value === 'desktop') { // 非移动端跳转首页
    router.push('/');
  } else {
    // 从上往下展开侧边栏
    drawerVisible.value = true;
    drawerType.value = 'menuList';
  }
}
const handleClickAvatar = () => {
  if (curDevice.value === 'desktop') { // 非移动端跳转首页
    router.push('/');
  } else {
    // 从上往下展开侧边栏
    drawerVisible.value = true;
    drawerType.value = 'infoList';
  }
}

const dialogVisible = ref(false);
const currentTab = ref('profile');

const handleCommand = (command: string | number | object) => {
  if (command === 'profile') {
    currentTab.value = 'profile';
    dialogVisible.value = true;
  } else if (command === 'account') {
    currentTab.value = 'account';
    dialogVisible.value = true;
  }
}


</script>