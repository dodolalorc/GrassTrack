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
            <el-descriptions-item label="手机号码">
              <span>
                {{ person.username }}
              </span>
            </el-descriptions-item>
            <el-descriptions-item label="家庭人口数">
              <span>
                {{ person.size }}
              </span>
            </el-descriptions-item>
            <el-descriptions-item label="省份">
              <span v-if="editStatus">
                <el-input v-model="person.province" size="small" />
              </span>
              <span v-else>
                {{ person.province }}
              </span>
            </el-descriptions-item>
            <el-descriptions-item label="地区">
              <span v-if="editStatus">
                <el-input v-model="person.area" size="small" />
              </span>
              <span v-else>
                {{ person.area }}
              </span>
            </el-descriptions-item>
            <el-descriptions-item label="乡镇">
              <span v-if="editStatus">
                <el-input v-model="person.town" size="small" />
              </span>
              <span v-else>
                {{ person.town }}
              </span>
            </el-descriptions-item>
            <el-descriptions-item label="村">
              <span v-if="editStatus">
                <el-input v-model="person.village" size="small" />
              </span>
              <span v-else>
                {{ person.village }}
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
import { UserInfo } from '@/types/userInfo';

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
  name: "",
  username: "",
  province: "",
  area: "",
  town: "",
  village: "",
  size: 1,
});

</script>