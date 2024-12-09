<template>
  <el-form ref="loginRef" :model="ruleForm" label-width="auto" label-position="top" class="px-2 py-5">
    <el-form-item label="账号" prop="username">
      <el-input v-model="ruleForm.username" type="mail" placeholder="请输入身份证号/邮箱" clearable />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="ruleForm.password" type="password" placeholder="请输入密码" show-password clearable />
    </el-form-item>
    <div class="flex w-full mb-6">
      <button class="flex-1 text-right rounded-md text-blue-800 text-sm underline" type="button" link
        @click="forgetPwd">
        忘记密码?
      </button>
    </div>
    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button
        class="flex w-full items-center justify-center rounded-md border border-transparent bg-green-800/90 px-8 py-2 text-base font-medium text-white hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:bg-green-800/50 disabled:cursor-not-allowed"
         :disabled="ruleForm.username === '' || ruleForm.password === ''">立即登录</button>
      <button
        class="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-600 px-8 py-2 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:focus:bg-gray-700 disabled:bg-gray-800/50 disabled:cursor-not-allowed"
        >重置</button>
    </div>
  </el-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const studentLoginData = ref({
  email: '',
  id_code: '',
  password: '',
  phone_number: ''
});

interface LoginData {
  username: string;
  password: string;
}

const loginRef = ref();

const ruleForm = ref<LoginData>({
  username: '',
  password: ''
});

const fipped = defineModel({
  required: true,
  type: Boolean,
  default: false
})

const forgetPwd = () => {
  fipped.value = true;
};

</script>