<template>
  <div class="w-full min-h-full text-3xl flex flex-col py-20 bg-white/90 rounded-xl">
    <h1 class="text-center text-4xl font-bold mb-10">
      牧场管理
    </h1>
    <div>
      <div class="flex justify-end items-center mb-4">
        <div class="flex items-center pr-10">
          <el-button type="primary" @click="handleAddGrassland" class="mr-4">
            <font-awesome-icon icon="fa-solid fa-plus" />
            添加牧场
          </el-button>
        </div>
      </div>
      <el-table stripe :data="tableData" class="w-full" style="width: 100%" row-key="id" border default-expand-all>
        <el-table-column prop="grassId" label="草场ID" sortable />
        <el-table-column prop="area" label="草场面积" sortable />
        <el-table-column prop="type" label="草场类型" sortable />
        <el-table-column prop="yield" label="草场产量" sortable />
        <el-table-column prop="year" label="年份" sortable />
        <el-table-column prop="month" label="月份" sortable />
        <el-table-column fixed="right" label="操作" min-width="120">
          <template #default>
            <el-button link type="primary" size="small">
              更多信息
            </el-button>
            <el-button link type="primary" size="small">
              编辑
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>

  <AddGlasslandDialog v-model:visible="dialogVisible" v-model:glassland-info="currentGlasslandInfo"
    v-model:table-data="tableData" />
</template>

<script setup lang="ts">
import { grasslandInfoList } from '@/api/apis/grassland';
import { grasslandInfo } from '@/types/apis/grassland';
import AddGlasslandDialog from '@/components/glassland/AddGlasslandDialog.vue';
import { ref } from 'vue'

const tableData = ref<grasslandInfo[]>([]);

const fetchGrasslandInfo = () => {
  grasslandInfoList().then((response) => {
    const res = response.data;
    console.log('获取牧场信息', res);
    if (res.code === 0) {
      if (res.data) {
      tableData.value = res.data;
      }
    } else {
      console.error('获取牧场信息失败', res.message);
    }
  }).catch((error) => {
    console.error('请求错误', error);
  });
}
fetchGrasslandInfo();

const dialogVisible = ref(false);
const handleAddGrassland = () => {
  dialogVisible.value = true;
}
const currentGlasslandInfo = ref<grasslandInfo>({} as grasslandInfo);

</script>