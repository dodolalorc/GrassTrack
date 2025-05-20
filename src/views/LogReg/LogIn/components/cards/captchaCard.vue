<template>
  <el-form ref="registerRef" :model="ruleForm" :rules="rules" label-width="auto" label-position="top" class="px-2 py-5">
    <div>
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="ruleForm.phone" placeholder="请输入手机号码" clearable />
      </el-form-item>
      <el-form-item label="验证码" prop="verifyCode" label-position="right">
        <div class="flex w-full">
          <el-input v-model="ruleForm.verifyCode" placeholder="请填写验证码" class="px-2" />
          <button
            class="border-transparent border rounded-md w-28 bg-yellow-800/90 text-sm font-medium text-white hover:bg-yellow-900  focus:outline-none focus: focus:ring-yellow-500 focus:ring-offset-2 disabled:bg-yellow-800/50 disabled:cursor-not-allowed"
            :disabled="ruleForm.phone === ''">{{ sended ? (counter <= 0 ? '重新发送' : counter + 's') : '发送验证码' }}</button>
        </div>
      </el-form-item>
    </div>
  </el-form>
  <div class="mt-4 flex flex-col items-center justify-end gap-x-6">
    <button type="submit"
      class="flex w-full items-center justify-center rounded-md border border-transparent bg-yellow-800/80 px-8 py-2 text-base font-medium text-white hover:bg-yellow-800 focus:outline-none focus:bg-yellow-800/90 focus:ring-offset-2 disabled:bg-yellow-800/50 disabled:cursor-not-allowed"
      :disabled="ruleForm.phone === '' || !sended">立即登录</button>
    <span class=" italic mt-2 ">没有账号?<a href="/signup" class="text-indigo-500">立即注册</a></span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";

const sended = ref(false);

const counter = ref(0);

interface formData {
	phone: string;
	verifyCode: string;
}

const registerRef = ref();

const ruleForm = ref<formData>({
	phone: "",
	verifyCode: "",
});

const rules = ref({
	phone: [
		{ required: true, message: "请输入手机号码", trigger: "blur" },
		{
			pattern: /^1[34578]\d{9}$/,
			message: "手机号码格式不正确",
			trigger: "blur",
		},
	],
	verifyCode: [
		{ required: true, message: "请输入验证码", trigger: "blur" },
		{ min: 6, max: 6, message: "验证码长度为6位", trigger: "blur" },
	],
});
</script>