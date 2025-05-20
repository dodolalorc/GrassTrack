<template>
  <div class="w-full min-h-full grid grid-cols-1 gap-4 divide-y-2 divide-gray-200">
    <div class="w-full justify-start text-3xl">
      我的账号
    </div>
    <div class="w-full py-10 text-xl grid grid-cols-1 gap-4 divide-y-2 divide-gray-200">
      <el-descriptions :column="2" direction="horizontal">
        <el-descriptions-item label="手机号码" label-class-name="my-label" class-name="my-content">
          <span v-if="editPhone">
            <el-input v-model="phone" size="small" />
          </span>
          <span v-else>
            {{ phone }}
            <el-button type="primary" text @click="editPhone = !editPhone">
              <font-awesome-icon icon="fa-regular fa-pen-to-square" />
            </el-button>
          </span>
        </el-descriptions-item>
        <el-descriptions-item label="邮箱地址" label-class-name="my-label" class-name="my-content">
          <span v-if="editEmail">
            <el-input v-model="email" size="small" />
          </span>
          <span v-else>
            {{ email }}
            <el-button type="primary" text @click="editEmail = !editEmail">
              <font-awesome-icon icon="fa-regular fa-pen-to-square" />
            </el-button>
          </span>
        </el-descriptions-item>
        <el-descriptions-item label="密码" label-class-name="my-label">
          未设置
          <el-button type="primary" text>
            <font-awesome-icon icon="fa-regular fa-pen-to-square" />
          </el-button>
        </el-descriptions-item>
        <el-descriptions-item label="是否接收短信提醒" label-class-name="my-label" class-name="my-content">
          <el-radio-group v-model="receiveSMS">
            <el-radio :value="1">是</el-radio>
            <el-radio :value="0">否</el-radio>
          </el-radio-group>
        </el-descriptions-item>
        <el-descriptions-item label="是否接收邮件提醒" label-class-name="my-label" class-name="my-content">
          <el-radio-group v-model="receiveEmail">
            <el-radio :value="1">是</el-radio>
            <el-radio :value="0">否</el-radio>
          </el-radio-group>
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";

const editStatus = ref(false);
const receiveSMS = ref(1);
const receiveEmail = ref(0);
const editPhone = ref(false);
const editEmail = ref(false);
const phone = ref("18888888888");
const email = ref("example123@qq.com");

const updateInfo = () => {
	ElMessage.success("提交成功");
	editStatus.value = !editStatus.value;
};
</script>
<style scoped>
/* :deep(.my-label) {} */

/* :deep(.my-content) {} */
</style>