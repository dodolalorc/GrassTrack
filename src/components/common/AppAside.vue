<template>
  <div class="w-full h-full justify-center items-start text-center flex">
    <el-menu v-if="curDevice === 'desktop'" default-active="/" class="h-full m-0 p-0 w-full " background-color="#d5dffb"
      text-color="#000000" active-text-color="#4e6bfd" router>
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
    <!-- 移动端展示此下拉列表 -->
    <el-drawer v-else v-model="drawerVisible" :direction="drawerDirection" :with-header="false"
      :size="drawerType === 'menuList' ? '50%' : '30%'">
      <div>
        <div v-show="drawerType === 'menuList'" class="w-full h-fit flex flex-col justify-center items-center">
          <SiteTitle />
          <ul class="w-full h-fit flex flex-col justify-center items-center my-5">
            <li v-for="item in menuList" :key="item.title" class="w-full flex justify-center items-center pb-4">
              <ul v-if="item.children">
                <li v-for="child in item.children" :key="child.title"
                  class="w-full flex justify-center items-center pb-4">
                  <el-link :underline="false" :href="child.link"
                    :type="route.name === child.name ? 'primary' : 'default'">
                    <font-awesome-icon :icon="child.icon" class="pr-3 text-2xl min-w-8" />
                    <span class="text-xl">{{ child.title }}</span>
                  </el-link>
                </li>
              </ul>
              <el-link v-else :underline="false" :href="item.link"
                :type="route.name === item.name ? 'primary' : 'default'">
                <font-awesome-icon :icon="item.icon" class="pr-3 text-2xl min-w-8" />
                <span class="text-xl">{{ item.title }}</span>
              </el-link>
            </li>
          </ul>
        </div>
        <div v-show="drawerType === 'infoList'">
          <div class="w-full flex flex-col justify-center items-center h-full">

            <el-avatar size="large" :src="avatar"
              class="hover:scale-150 transition duration-500 hover:cursor-pointer" />
            <span class="text-xl">你好！牧户 张多羊</span>

            <div class="py-4 h-full flex flex-col justify-center items-center">
              <el-link :underline="false" :href="'/profile'" class="w-full flex justify-center items-center py-4">
                <span class="text-xl">个人信息</span>
              </el-link>
              <el-link :underline="false" :href="'/account'" class="w-full flex justify-center items-center py-4">
                <span class="text-xl">账户信息</span>
              </el-link>
            </div>
          </div>
        </div>
      </div>
    </el-drawer>
  </div>

</template>

<script lang="ts" setup>
import { ref } from "vue";
import { onMounted } from "vue";
import { checkDevice } from "@/utils/checkDevice";
import SiteTitle from "./SiteTitle.vue";
import type { DrawerProps } from "element-plus";
import { useRouter, useRoute } from "vue-router";
import avatar from "@/assets/img/avatar.jpg";

const route = useRoute();
const router = useRouter();

const curDevice = ref("mobile");
onMounted(() => {
	curDevice.value = checkDevice();
});

const drawerVisible = defineModel("drawerVisible", {
	default: false,
	type: Boolean,
});
const drawerType = defineModel("drawerType", {
	default: "menuList",
	type: String,
});

const drawerDirection = ref<DrawerProps["direction"]>("ttb"); // top to bottom

interface MenuItem {
	title: string;
	name: string;
	icon: string;
	link: string;
	children?: MenuItem[];
}

const menuList = ref<MenuItem[]>([
	{
		title: "主页",
		icon: "fa-solid fa-house",
		name: "Dashboard",
		link: "/",
	},
	{
		title: "牲畜管理",
		icon: "fa-solid fa-cow",
		name: "Cattle",
		link: "/cattle",
	},
	{
		title: "牧场管理",
		icon: "fa-solid fa-leaf",
		name: "Forage",
		link: "/forage",
	},
	{
		title: "草畜平衡",
		icon: "fa-solid fa-balance-scale",
		name: "Balance",
		link: "/balance",
	},
	{
		title: "专家咨询",
		icon: "fa-solid fa-upload",
		name: "Submissions",
		link: "/question/submit",
		children: [
			{
				title: "提交问题",
				icon: "fa-solid fa-question",
				name: "Submit",
				link: "/question/submit",
			},
			{
				title: "历史问题",
				icon: "fa-solid fa-clock-rotate-left",
				name: "History",
				link: "/question/history",
			},
		],
	},
]);
</script>