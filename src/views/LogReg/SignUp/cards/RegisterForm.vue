<template>
  <div class="w-full h-full">
    <div class="w-full h-full flex justify-center items-center">
      <div class="w-full h-full max-w-md px-2 py-4 sm:px-0 text-center">
        <el-form v-if="registing" :model="form" :rules="rules" ref="formRef" label-width="auto" style="max-width: 600px"
          class="w-full">

          <DivideTitle title="注册账号" />

          <el-form-item prop="username" label="手机号">
            <el-input v-model="form.username" placeholder="请填写注册手机号" />
          </el-form-item>
          <!-- <el-form-item label="验证码" prop="verifyCode" label-position="right">
            <div class="flex w-full">
              <el-input v-model="form.verifyCode" placeholder="请填写验证码" class="pr-2" />
              <button
                class="border-transparent border rounded-md w-28 bg-green-800/90 text-sm font-medium text-white hover:bg-green-900  focus:outline-none focus: focus:ring-green-500 focus:ring-offset-2 disabled:bg-green-800/50 disabled:cursor-not-allowed"
                :disabled="form.username === ''">{{ sended ? (counter <= 0 ? '重新发送' : counter + 's') : '发送验证码'
                }}</button>
            </div>
          </el-form-item> -->
          <el-form-item prop="password" label="密码">
            <el-input v-model="form.password" placeholder="请填写密码" type="password" />
          </el-form-item>
          <el-form-item prop="check_password" label="确认密码">
            <el-input v-model="form.check_password" placeholder="请再次输入密码" type="password" />
          </el-form-item>

          <DivideTitle title="基本信息" />

          <el-form-item prop="name" label="姓名">
            <el-input v-model="form.name" placeholder="请填写您的姓名" />
          </el-form-item>
          <el-form-item prop="province" label="省份">
            <el-input v-model="form.province" placeholder="请填写您所在的省份" />
          </el-form-item>
          <el-form-item prop="area" label="市区">
            <el-input v-model="form.area" placeholder="请填写您所在的市区" />
          </el-form-item>
          <el-form-item prop="town" label="乡镇">
            <el-input v-model="form.town" placeholder="请填写您所在的乡镇" />
          </el-form-item>
          <el-form-item prop="village" label="村庄">
            <el-input v-model="form.village" placeholder="请填写您所在的村庄" />
          </el-form-item>
          <el-form-item prop="size" label="家庭人口">
            <el-input v-model="form.size" placeholder="请填写家庭人口数" type="number" />
          </el-form-item>
          <!-- <el-form-item>
            <el-checkbox class="text-sm text-gray-500">
              我已阅读并同意
              <el-link href="/agreement" class="text-blue-500">《用户协议》</el-link>
              和
              <el-link href="/privacy" class="text-blue-500">《隐私政策》</el-link>
            </el-checkbox>
          </el-form-item> -->
          <el-form-item>
            <div class="w-full justify-end items-center flex ">
              <button @click="resetForm"
                class="flex w-fit ml-4 items-center justify-center rounded-md border border-transparent bg-gray-400 px-5 py-2 text-base font-medium text-white hover:bg-gray-700/50 focus:outline-none focus:focus:bg-gray-700 disabled:bg-gray-800/50 disabled:cursor-not-allowed">清空表单</button>
              <button type="submit" @click="submitForm"
                class="flex w-fit ml-4 items-center justify-center rounded-md border border-transparent bg-green-800/80 px-5 py-2 text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:bg-green-800/90 focus:ring-offset-2 disabled:bg-green-800/50 disabled:cursor-not-allowed">立即注册</button>
            </div>
          </el-form-item>
          <el-form-item>
            <div class="w-full items-center italic">
              <el-link href="/login" class="text-blue-500">已有账号？去
                <span class="text-blue-500">登录</span>
              </el-link>
            </div>
          </el-form-item>
        </el-form>
        <div v-else>
          <TypingText :typingText="typingText" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { UserInfo } from '@/types/userInfo';
import { ElMessage, type FormInstance, type FormRules } from 'element-plus';
import DivideTitle from '@/components/common/DivideTitle.vue';
import TypingText from '@/components/common/TypingText.vue';
import { userLoginByPswd, userRegister } from '@/api/apis/user';
import { setUserBasicInfo } from '@/utils/initCheckInStatus';
import { userLoginByPswdRes } from '@/types/apis/user';
import { useRouter } from 'vue-router';

const router = useRouter();

const registing = ref(true);
const typingText = ref('注册成功，正在为您登录平台...');

const formRef = ref<FormInstance>();
interface RegUserInfo extends UserInfo {
  name: string;
  username: string;
  province: string;
  area: string;
  town: string;
  village: string;
  size: number;
  verifyCode: string; // Added verifyCode to the interface
  password: string;
  check_password: string;
}
const form = ref<RegUserInfo>({
  name: '',
  username: '',
  phone: '',
  province: '',
  area: '',
  town: '',
  village: '',
  size: 1,
  verifyCode: '',
  password: '',
  check_password: '',
});
const sended = ref(false);
const counter = ref(0);
const timer = ref<ReturnType<typeof setInterval> | null>(null);
const startTimer = () => {
  counter.value = 60;
  sended.value = true;
  timer.value = setInterval(() => {
    if (counter.value > 0) {
      counter.value--;
    } else {
      clearInterval(timer.value!);
      sended.value = false;
    }
  }, 1000);
};
const stopTimer = () => {
  if (timer.value) {
    clearInterval(timer.value);
    timer.value = null;
  }
};

const rules = reactive<FormRules<typeof form>>({
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
    { min: 2, max: 10, message: '长度在 2 到 10 个字符之间', trigger: 'blur' },
  ],
  username: [
    { required: true, message: '请输入注册手机号', trigger: 'blur' },
    {
      validator: (rule: any, value: any, callback: any) => {
        const phoneRegex = /^1[3-9]\d{9}$/;
        if (value === '') {
          callback(new Error('请输入注册手机号'));
        } else if (!phoneRegex.test(value)) {
          callback(new Error('请输入有效的手机号'));
        } else {
          callback();
        }
      }, trigger: 'blur'
    },
    {
      validator: (rule: any, value: any, callback: any) => {
        // TODO: Simulate an API call to check if the phone number is already registered
      }, trigger: 'blur'
    }
  ],
  province: [{ required: true, message: '请选择省份', trigger: 'change' }],
  area: [{ required: true, message: '请选择市区', trigger: 'change' }],
  town: [{ required: true, message: '请选择乡镇', trigger: 'change' }],
  village: [{ required: true, message: '请选择村庄', trigger: 'change' }],
  size: [
    { required: true, message: '请输入家庭人口数', trigger: 'blur' },
    {
      validator: (rule: any, value: any, callback: any) => {
        if (value === '') {
          callback(new Error('请输入家庭人口数'));
        } else if (isNaN(value)) {
          callback(new Error('家庭人口数必须是数字'));
        } else if (!Number.isInteger(value)) {
          callback(new Error('家庭人口数必须是整数'));
        } else if (value < 1 || value > 100) {
          callback(new Error('家庭人口数必须在 1 到 100 之间'));
        } else {
          callback();
        }
      }, trigger: 'blur'
    },
  ],
  verifyCode: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { min: 6, max: 6, message: '验证码长度为6位', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '长度在 6 到 20 个字符之间', trigger: 'blur' }
  ],
  check_password: [
    { required: true, message: '请再次输入密码', trigger: 'blur' },
    {
      validator: (rule: any, value: any, callback: any) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== form.value.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      }, trigger: 'blur'
    }
  ]
});


const submitForm = (event: any) => {
  event.preventDefault();
  // TODO: Simulate an API call to register the user
  userRegister(form.value).then(response => {
    const res = response.data;
    if (res.code === 0) {
      ElMessage.success('注册成功');
      registing.value = false;
      const loginData = {
        username: form.value.username,
        password: form.value.password,
      } as userLoginByPswdRes;
      userLoginByPswd(loginData).then(response2 => {
        const res2 = response2.data;
        if (res2.code === 0) {
          setUserBasicInfo(res2.data.token, form.value.name);
          setTimeout(() => {
            router.push('/');
          }, 3000);
        } else {
          ElMessage.error(res.msg);
        }
      }).catch(error => {
        ElMessage.error('登录失败，请稍后再试');
      });
    }
    else {
      ElMessage.error(res.msg);
    }
  }).catch(error => {
    ElMessage.error('注册失败，请稍后再试');
  });
}

const resetForm = () => {
  formRef.value?.resetFields();
};
</script>