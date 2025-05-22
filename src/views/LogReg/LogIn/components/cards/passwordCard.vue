<template>
  <el-form
    ref="loginRef"
    :model="ruleForm"
    :rules="rules"
    label-width="auto"
    label-position="top"
    class="px-2 py-5"
  >
    <el-form-item label="账号" prop="username">
      <el-input v-model="ruleForm.username" type="phone" placeholder="请输入手机号" clearable />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="ruleForm.password"
        type="password"
        placeholder="请输入密码"
        show-password
        clearable
      />
    </el-form-item>
    <div class="flex w-full mb-6 justify-end">
      <button
        class="text-right rounded-md text-blue-800 text-sm underline"
        type="button"
        link
        @click="forgetPwd"
      >
        忘记密码?
      </button>
    </div>
    <div class="mt-3 flex flex-col items-center">
      <button
        class="flex w-full items-center justify-center rounded-md border border-transparent bg-yellow-800/90 px-8 py-2 text-base font-medium text-white hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:bg-yellow-800/50 disabled:cursor-not-allowed"
        :disabled="ruleForm.username === '' || ruleForm.password === ''"
        @click="submitForm"
      >
        立即登录
      </button>
      <span class="italic mt-2"
        >没有账号?<a href="/signup" class="text-indigo-500">立即注册</a></span
      >
    </div>
  </el-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { userLoginByPswd } from '@/api/apis/user'
import type { userLoginByPswdResponse } from '@/types/apis/user'
import { useRouter } from 'vue-router'
import { setUserBasicInfo } from '@/utils/initCheckInStatus'
const router = useRouter()

interface LoginData {
  username: string
  password: string
}

const loginRef = ref()

const ruleForm = ref<LoginData>({
  username: '',
  password: '',
})

const fipped = defineModel({
  required: true,
  type: Boolean,
  default: false,
})

const rules = ref({
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' },
  ],
  username: [
    { required: true, message: '请输入手机号码', trigger: 'blur' },
    {
      pattern: /^1[34578]\d{9}$/,
      message: '手机号码格式不正确',
      trigger: 'blur',
    },
  ],
})

const submitForm = (event: Event) => {
  event.preventDefault()
  userLoginByPswd(ruleForm.value)
    .then((response) => {
      const res = response.data as userLoginByPswdResponse
      if (res.code === 0) {
        ElMessage.success('登录成功')
        const { name, token } = res.data

        setUserBasicInfo(token, name)

        router.push('/')
      } else {
        ElMessage.error(res.msg)
      }
    })
    .catch((err) => {
      console.error(err)
      ElMessage.error('登录失败，请稍后再试')
    })
}
const forgetPwd = () => {
  fipped.value = true
}
</script>
