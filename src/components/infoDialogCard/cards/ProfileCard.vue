<template>
  <div class="w-full min-h-full grid grid-cols-1 gap-4 divide-y-2 divide-gray-200">
    <div class="w-full justify-start text-3xl">
      个人资料
    </div>
    <div>
      <div class="w-full grid grid-cols-1 gap-4 divide-y-2 divide-gray-200">
        <div class="w-full h-full flex flex-col justify-between items-center">
          <el-descriptions direction="vertical" border style="margin-top: 20px; width: 100%">
            <el-descriptions-item :rowspan="3" :width="140" label="照片" align="center">
              <el-image style="width: 100px; height: 100px" :src="person.avatar" />
            </el-descriptions-item>
            <el-descriptions-item label="姓名">
              <span v-if="editStatus">
                <el-input v-model="person.name" size="small" />
              </span>
              <span v-else>
                {{ person.name }}
              </span>
            </el-descriptions-item>
            <el-descriptions-item label="性别">
              <span v-if="editStatus">
                <el-input v-model="person.sex" size="small" />
              </span>
              <span v-else>
                {{ person.sex }}
              </span>
            </el-descriptions-item>
            <el-descriptions-item label="年龄">
              <span v-if="editStatus">
                <el-input v-model="person.age" size="small" />
              </span>
              <span v-else>
                {{ person.age }}
              </span>
            </el-descriptions-item>
            <el-descriptions-item label="手机号码">
              <span>
                {{ person.phoneNumber }}
              </span>
            </el-descriptions-item>
            <el-descriptions-item label="地区">
              <span v-if="editStatus">
                <el-input v-model="person.region" size="small" />
              </span>
              <span v-else>
                {{ person.region }}
              </span>
            </el-descriptions-item>
            <el-descriptions-item label="类型">
              <el-tag v-for="item in person.type" :key="item" type="success">{{ item }}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="我的住址">
              <span v-if="editStatus">
                <el-input v-model="person.address" size="small" />
              </span>
              <span v-else>
                {{ person.address }}
              </span>
            </el-descriptions-item>
          </el-descriptions>
          <div class="w-full flex justify-end items-center mt-10 text-xl">
            <el-button @click="updateInfo" size="large" text bg :type="editStatus ? 'success' : 'primary'">
              {{ editStatus ? '提交' : '编辑' }}
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import avatar from '@/assets/img/avatar.jpg';
import { ElMessage } from 'element-plus';
import { UserInfo } from '@/types/ueseInfo';

const editStatus = ref(false);
const updateInfo = () => {
  if (editStatus.value) {
    ElMessage.success('修改成功');
  } else {
    ElMessage.success('进入编辑状态');
  }
  editStatus.value = !editStatus.value;
};

const person = ref<UserInfo>({
  avatar: avatar,
  sex: '男',
  age: 38,
  name: '张多羊',
  phoneNumber: '18888888888',
  region: '呼和浩特',
  type: ['牧羊人'],
  address: '内蒙古省呼和浩特市赛罕区',
});

</script>