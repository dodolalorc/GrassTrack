<template>
  <div class="gridgrid-rows-3 grid-cols-2 w-full h-full">

    <div class="col-span-3">
      <h1 class="text-2xl font-bold text-gray-800 leading-10">
        <font-awesome-icon icon="fa-solid fa-leaf" />
        <span class=" hover:text-green-800 ml-3">我的牧场</span>
      </h1>
      <div class="mb-2 md:mb-10 mt-5 w-full justify-items-center grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4">
        <div v-for="i in 3"
          class="h-44 w-64 flex flex-col text-center justify-center px-10 ease-in-out shadow-md bg-slate-50 rounded-xl duration-100 hover:scale-110 hover:rounded-md">
          <el-image :src="forageUrl" class="h-full w-full" fit="contain" />
          <h1>牧场{{ i }}</h1>
        </div>
      </div>
    </div>
    <div class="md:col-span-3 col-span-1 w-full">
      <h1 class="text-2xl font-bold text-gray-800 leading-10">
        <font-awesome-icon icon="fa-solid fa-cow" />
        <span class=" hover:text-green-800 ml-3">我的牲畜</span>
      </h1>
      <div>
        <div class="flex justify-start items-start w-full">
          <div v-for="item in cattleList"
            class="h-52 w-52 flex flex-col text-center justify-center px-10 ease-in-out duration-100 hover:scale-110 hover:cursor-pointer">
            <el-image :src="item.url" class="h-full w-full" fit="contain" />
            <h1>{{ item.name }}</h1>
            <h1>{{ item.count }}头</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-3">
      <h1 class="text-2xl font-bold text-gray-800 leading-10">
        <font-awesome-icon icon="fa-solid fa-envelope" />
        <span class=" hover:text-green-800 ml-3">我的消息(1条未读)</span>
      </h1>
      <div class="mt-2">
        <div class="bg-white shadow-sm px-5 py-4 rounded-sm">
          <div slot="header" class="flex justify-between">
            <div class="text-lg font-bold text-green-800 ">
              <font-awesome-icon icon="fa-solid fa-message" />
              <span class=" hover:text-green-800 ml-3">专家消息</span>
            </div>
            <div class="text-red-700">
              <span class="px-2">未读</span>
              <font-awesome-icon icon="fa-solid fa-x" size="xs" style="color: #ff2600;" />
            </div>
          </div>
          <div class="text-gray-800">
            <p>
              我已经分析你提交的牧场信息，以下是一些关于你遇到的问题的建议：首先，根据动物的不同需求，应该优化饲料配方，考虑到你牧牛的草场的优势草种是白三叶草，其优点是富含蛋白质，适合与禾草混种，能改善土壤肥力......
              <el-button type="primary" link>查看详情</el-button>
            </p>
          </div>
        </div>
        <div class="bg-white shadow-sm px-5 py-4 rounded-sm">
          <div slot="header" class="flex justify-between">
            <div class="text-lg font-bold text-yellow-800 ">
              <font-awesome-icon icon="fa-solid fa-message" />
              <span class=" hover:text-green-800 ml-3">系统消息</span>
            </div>
            <div class="text-green-700">
              <span class="px-2">已读</span>
              <font-awesome-icon icon="fa-solid fa-check" size="xs" style="color: #63E6BE;" />
            </div>
          </div>
          <div class="text-gray-800">
            <p>
              恭喜你成功注册牧场管理系统，你可以在这里管理你的牧场，查看专家的建议，查看你的牧场信息交流......
              <el-button type="primary" link>查看详情</el-button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const forageUrl = '/src/assets/img/forage.png'

interface Cattle {
  name: string;
  url: string;
  count: number;
}
const cattleList = ref<Cattle[]>([
  {
    name: '牛类',
    url: '/src/assets/icon/cattle/ox.svg',
    count: 130,
  },
  {
    name: '羊类',
    url: '/src/assets/icon/cattle/gost.svg',
    count: 120,
  }
]);

</script>