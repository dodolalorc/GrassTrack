<template>
  <div class="w-full h-full flex justify-between items-center">
    <div
      class="text-2xl font-extrabold hover:cursor-pointer flex flex-row"
      @click="handleClickTitle"
    >
      <span v-if="curDevice !== 'desktop'" class="pr-2">
        <font-awesome-icon icon="fa-solid fa-grip" />
      </span>
      <SiteTitle />
    </div>
    <div class="flex h-full justify-center items-center">
      <span v-if="curDevice !== 'mobile'" class="font-bold text-center text-xl pr-6">
        亲爱的牧民，欢迎回来！
      </span>
      <div class="px-2 md:px-10 avatar-container relative">
        <div v-if="curDevice === 'desktop'" class="flex flex-row items-center justify-center gap-4">
          <el-dropdown :hide-on-click="false" @command="handleCommand">
            <el-avatar
              size="large"
              :src="avatar"
              class="hover:scale-150 transition duration-500 hover:cursor-pointer"
            />
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="profile">个人信息</el-dropdown-item>
                <el-dropdown-item command="account">账号信息</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <div class="hover:cursor-pointer" @click="handleLogout" title="退出登录">
            <font-awesome-icon
              icon="fa-solid fa-right-from-bracket"
              size="lg"
              class="hover:text-blue-500 transition-colors duration-300"
            />
          </div>
        </div>
        <div v-else class="flex flex-row items-center justify-center gap-4">
          <el-avatar
            size="large"
            :src="avatar"
            class="hover:scale-150 transition duration-500 hover:cursor-pointer"
            @click="handleClickAvatar"
          />
          <div class="hover:cursor-pointer" @click="handleLogout" title="退出登录">
            <font-awesome-icon
              icon="fa-solid fa-right-from-bracket"
              size="lg"
              class="hover:text-blue-500 transition-colors duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <infoCard v-model:current-tab="currentTab" v-model:dialog-visible="dialogVisible" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import SiteTitle from './SiteTitle.vue'
import { checkDevice } from '@/utils/checkDevice'
import avatar from '@/assets/img/avatar.jpg'
import { useRouter } from 'vue-router'
import infoCard from '../infoDialogCard/infoCard.vue'
import { useAccessTokenStore } from '@/store/accessToken'
import { ElMessage, ElMessageBox } from 'element-plus'
import { userLogout } from '@/api/apis/user'

const router = useRouter()

const curDevice = ref('mobile')
onMounted(() => {
  curDevice.value = checkDevice()
})

const drawerVisible = defineModel('drawerVisible', {
  default: false,
  type: Boolean,
})
const drawerType = defineModel('drawerType', {
  default: 'menuList',
  type: String,
})

const handleClickTitle = () => {
  if (curDevice.value === 'desktop') {
    // 非移动端跳转首页
    router.push('/')
  } else {
    // 从上往下展开侧边栏
    drawerVisible.value = true
    drawerType.value = 'menuList'
  }
}
const handleClickAvatar = () => {
  if (curDevice.value === 'desktop') {
    // 非移动端跳转首页
    router.push('/')
  } else {
    // 从上往下展开侧边栏
    drawerVisible.value = true
    drawerType.value = 'infoList'
  }
}

const dialogVisible = ref(false)
const currentTab = ref('profile')

const handleCommand = (command: string | number | object) => {
  if (command === 'profile') {
    currentTab.value = 'profile'
    dialogVisible.value = true
  } else if (command === 'account') {
    currentTab.value = 'account'
    dialogVisible.value = true
  }
}

const handleLogout = () => {
  ElMessageBox.confirm('确定要退出登录吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(() => {
      logout()
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消退出登录',
      })
    })
}

const logout = () => {
  userLogout().finally(() => {
    clearUserInfo()
  })
}

const clearUserInfo = () => {
  const accessTokenStore = useAccessTokenStore()
  accessTokenStore.removeAccessToken()
  accessTokenStore.removeName()
  localStorage.clear()
  ElMessage({
    type: 'success',
    message: '退出登录成功',
  })
  router.push('/login')
}
</script>
