<template>
  <div class="w-full h-full flex justify-between items-center">
    <div class="text-2xl font-extrabold">
      {{ title }}
    </div>
    <div class="flex h-full justify-center items-center">
      <span class="font-bold text-center text-xl pr-6">
        亲爱的牧民，欢迎回来！
      </span>
      <div class="px-10 avatar-container relative">
        <el-dropdown :hide-on-click="false" @command="handleCommand">
          <el-avatar size="large" :src="avatar" class="hover:scale-150 transition duration-500 hover:cursor-pointer" />
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="profile">个人信息</el-dropdown-item>
              <el-dropdown-item command="account">账号信息</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>

  <!-- 信息框 -->
  <el-dialog v-model="dialogVisible" width="900" align-center>
    <div class="flex flex-col items-center w-full h-[36rem]">
      <TabGroup>
        <TabList :class="['flex flex-row space-x-1 divide-x-2 rounded-xl w-full h-full p-1']">
          <div class="w-1/5 h-full flex flex-col justify-items-start rounded-md p-2 bg-slate-400/20 ">
            <div class="w-full h-32">
              <h2 class="max-w-lg text-[1.6rem]/10 font-medium tracking-tighter text-balance max-sm:px-4 2xl:mt-0">
                账户设置
              </h2>
              <span class="font-normal">
                在这里可以查看和修改您的个人信息，以及您的账号信息
              </span>
            </div>
            <Tab v-for="category in categories" as="template" :key="category.key" v-slot="{ selected }">
              <button :class="[
                ' rounded-lg py-2.5 font-bold leading-3 shadow-sm mt-1',
                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none',
                selected
                  ? 'bg-blue-400 text-white font-semibold shadow'
                  : 'text-black hover:bg-white/[0.12] hover:text-blue-400',
              ]">
                {{ category.content }}
              </button>
            </Tab>
          </div>
          <TabPanels class="mt-2 flex-1 w-4/5 h-full">
            <TabPanel key="profile" :class="[
              'rounded-xl bg-white p-3',
              'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none',
            ]">
              <ProfileCard />
            </TabPanel>
            <TabPanel key="account" :class="[
              'rounded-xl bg-white p-3',
              'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none',
            ]">
              <AccountCard />
            </TabPanel>
          </TabPanels>
        </TabList>
      </TabGroup>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import avatar from '@/assets/img/avatar.jpg';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import ProfileCard from '@/components/common/cards/ProfileCard.vue';
import AccountCard from '@/components/common/cards/AccountCard.vue';
import { ElMessage } from 'element-plus';

const categories = ref({
  'profile': {
    key: 'profile',
    title: '个人资料',
    content: '个人资料'
  },
  'account': {
    key: 'account',
    title: '账号信息',
    content: '账号信息'
  }
});
const dialogVisible = ref(false);
const currentTab = ref('profile');
const title = ref('草畜平衡决策预警系统');

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