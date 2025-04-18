<template>
  <div class="w-full min-h-full text-3xl flex flex-col py-20 bg-white/90 rounded-xl">
    <h1 class="text-center text-4xl font-bold mb-10">
      牲畜管理
    </h1>
    <div>
      <div class="flex justify-between items-center mb-4">
        <div class="flex w-1/3 justify-between items-center mb-4 pl-5">
          <el-input v-model="search" placeholder="请输入搜索内容" class="w-1/2" />
          <el-button type="primary" class="ml-4">搜索</el-button>
        </div>
        <div class="flex items-center pr-10">
          <el-button type="primary" @click="handleAddAnimal">
            <font-awesome-icon icon="fa-solid fa-plus" />
            添加牲畜
          </el-button>
        </div>
      </div>
    </div>
    <div class="w-full px-10 ">
      <el-table stripe :data="tableData" class="w-full" style="width: 100%" row-key="id" border default-expand-all>
        <el-table-column prop="id" label="ID" />
        <el-table-column prop="name" label="牲畜种类" sortable />
        <el-table-column prop="min" label="最小数量" sortable />
        <el-table-column prop="max" label="最大数量" sortable />
        <el-table-column prop="goal" label="目标数量" sortable />
        <el-table-column prop="need" label="动物需求数量" sortable />
      </el-table>
    </div>
  </div>

  <AddAnimalDialog :visible="dialogVisible" @close="dialogVisible = false" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { AnimalTypeInfo } from '@/types/AnimalInfo';
import { AnimalType } from '@/api/apis/animal';
import { CommonResp } from '@/types/apis/common';
import AddAnimalDialog from '@/components/animal/AddAnimalDialog.vue';

const search = ref(''); // 搜索框的值

const tableData = ref<AnimalTypeInfo[]>([] as AnimalTypeInfo[]);

const fetchAnimalTypeInfo = () => {
  AnimalType().then((response) => {
    const res = response.data as CommonResp;
    if (res.code === 0) {
      tableData.value = res.data;
    } else {
      ElMessage.error(res.msg);
    }
  }).catch((error) => {
    console.error(error);
    ElMessage.error('获取牲畜种类信息失败，请稍后重试');
  });
}

fetchAnimalTypeInfo();

const dialogVisible = ref(false); // 控制对话框的显示和隐藏
const handleAddAnimal = () => {
  dialogVisible.value = true;
}
</script>