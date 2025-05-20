<template>
  <div class="flex px-5 pt-5 flex-col bg-white rounded-xl shadow-lg h-auto ease-in-out duration-500 z-20 w-96">
    <div class="text-2xl font-extrabold text-center flex justify-center items-center mx-2">
      <el-image :src="Icon" class="w-12" />
      <span class="h-full w-full">
        {{ title }}
      </span>
    </div>
    <div class="w-full h-full max-w-md px-2 py-4 sm:px-0">
      <TabGroup>
        <TabList :class="['flex space-x-1 rounded-xl bg-yellow-800/80 p-1']">
          <Tab v-for="category in categories" as="template" :key="category.key" v-slot="{ selected }">
            <button :class="[
              'w-full rounded-lg py-2.5 font-bold leading-3',
              'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none',
              selected
                ? 'bg-white text-black font-semibold shadow'
                : 'text-white hover:bg-white/[0.12] hover:text-white',
            ]">
              {{ category.content }}
            </button>
          </Tab>
        </TabList>

        <TabPanels class="mt-2 h-full">
          <TabPanel key="login" :class="[
            'rounded-xl bg-white p-3',
            'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none',
          ]">
            <LoginCardCover />
          </TabPanel>
          <TabPanel key="register" :class="[
            'rounded-xl bg-white p-3',
            'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none',
          ]">
            <RegisterCard />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import LoginCardCover from "./cards/passwordCardCover.vue";
import RegisterCard from "./cards/captchaCard.vue";
import Icon from "@/assets/icon.svg";

const title = ref("草畜平衡决策预警系统");

const categories = ref({
	byPassword: {
		key: "byPassword",
		title: "密码登录",
		content: "密码登录",
	},
	byCaptcha: {
		key: "byCaptcha",
		title: "验证码登录",
		content: "验证码登录",
	},
});
</script>

<style scoped></style>