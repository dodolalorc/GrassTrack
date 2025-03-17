<template>
  <div class="w-full h-full justify-center items-start text-center flex">
    <el-menu default-active="/" class="h-full m-0 p-0 w-full " background-color="#d5dffb" text-color="#000000"
      active-text-color="#4e6bfd" router>
      <div v-for="item in menuList" :key="item.title">
        <el-sub-menu v-if="item.children" :index="item.link">
          <template #title>
            <div class="w-full flex justify-start items-start px-5">
              <font-awesome-icon :icon="item.icon" class="pr-3 text-2xl min-w-8" />
              <span slot="title" class="text-xl">{{ item.title }}</span>
            </div>
          </template>
          <el-menu-item-group>
            <div v-for="child in item.children">
              <el-menu-item :index="child.link">
                <div class="w-full flex justify-start items-start px-5">
                  <font-awesome-icon :icon="child.icon" class="pr-3 text-2xl min-w-8" />
                  <span slot="title" class="text-xl">{{ child.title }}</span>
                </div>
              </el-menu-item>
            </div>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item v-else :index="item.link">
          <div class="w-full flex justify-start items-start px-5">
            <font-awesome-icon :icon="item.icon" class="pr-3 text-2xl min-w-8" />
            <span slot="title" class="text-xl">{{ item.title }}</span>
          </div>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface MenuItem {
  title: string;
  icon: string;
  link: string;
  children?: MenuItem[];
}

const menuList = ref<MenuItem[]>([
  {
    title: '主页',
    icon: 'fa-solid fa-house',
    link: '/',
  },
  {
    title: '牲畜管理',
    icon: 'fa-solid fa-cow',
    link: '/cattle',
  },
  {
    title: '草场管理',
    icon: 'fa-solid fa-leaf',
    link: '/forage'
  },
  {
    title: '草畜平衡',
    icon: 'fa-solid fa-balance-scale',
    link: '/balance'
  },
  {
    title: '专家咨询',
    icon: 'fa-solid fa-upload',
    link: '/submit',
    children: [
      {
        title: '提交问题',
        icon: 'fa-solid fa-question',
        link: '/submit'
      },
      {
        title: '历史问题',
        icon: 'fa-solid fa-clock-rotate-left',
        link: '/my-question',
      }
    ],
  }
])
</script>