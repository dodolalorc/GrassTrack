<template>
  <div class="w-full min-h-full text-3xl flex flex-col py-20 bg-white/90 rounded-xl">
    <h1 class="text-center text-4xl font-bold mb-10">
      牲畜管理
    </h1>
    <div class="w-full px-10">
      <div class="flex justify-between items-center mb-4">
        <div class="flex w-1/3 justify-between items-center mb-4">
          <el-input v-model="search" placeholder="请输入搜索内容" class="w-1/2" />
          <el-button type="primary" class="ml-4">搜索</el-button>
        </div>
        <div class="flex w-1/3 justify-end items-center mb-4">
          <el-button type="danger" @click="handleDel">
            <font-awesome-icon icon="fa-solid fa-x" class="pr-2" />
            <span>移除选中</span>
          </el-button>
          <el-button type="primary" @click="updateAnimalTypeInfo">
            <font-awesome-icon icon="fa-solid fa-plus" class="pr-2" />
            <span>添加牲畜</span>
          </el-button>
        </div>
      </div>
    </div>
    <div class="w-full px-10 ">
      <!-- TODO:加载中的数据显示处理 -->
      <el-table stripe :data="tableData" class="w-full" style="width: 100%" row-key="id"
        @selection-change="handleSelectionChange" border default-expand-all>
        <el-table-column type="selection" width="55" />
        <el-table-column prop="id" label="家畜ID" />
        <el-table-column prop="species" label="种类名称" sortable />
        <el-table-column prop="quantity" label="数量" sortable />
        <el-table-column prop="year" label="年份" sortable />
        <el-table-column prop="month" label="月份" sortable />
        <el-table-column prop="farmId" label="牧户ID" sortable />
        <el-table-column prop="typeId" label="牲畜种类ID" sortable />
        <el-table-column fixed="right" label="操作" min-width="120">
          <template #default="scope">
            <el-button link type="primary" @click="updateAnimalTypeInfo(scope.$index)">修改信息</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
  <AddAnimalDialog v-model:visible="dialogVisible" v-model:animal-info="currentAnimalInfo"
    v-model:animal-type-list="animalTypeList" v-model:table-data="tableData" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import type { AnimalInfo, AnimalTypeInfo } from "@/types/AnimalInfo";
import { AnimalInfoDel, AnimalInfoList, AnimalType } from "@/api/apis/animal";
import type { CommonResp } from "@/types/apis/common";
import AddAnimalDialog from "@/components/animal/AddAnimalDialog.vue";

const search = ref(""); // 搜索框的值

const animalTypeList = ref<AnimalTypeInfo[]>([] as AnimalTypeInfo[]);
const currentAnimalInfo = ref<AnimalInfo>({} as AnimalInfo);
const tableData = ref<AnimalInfo[]>([] as AnimalInfo[]);

const fetchAnimalTypeInfo = () => {
	AnimalType()
		.then((response) => {
			const res = response.data as CommonResp;
			if (res.code === 0) {
				animalTypeList.value = res.data as AnimalTypeInfo[];
				fetchAnimalInfo();
			} else {
				ElMessage.error(res.msg);
			}
		})
		.catch((error) => {
			ElMessage.error("获取牲畜种类信息失败，请稍后重试");
		});
};
fetchAnimalTypeInfo();
const fetchAnimalInfo = () => {
	AnimalInfoList()
		.then((response) => {
			const res = response.data as CommonResp;
			if (res.code === 0) {
				tableData.value = res.data as AnimalInfo[];
			}
		})
		.catch((error) => {
			ElMessage.error("获取牲畜信息失败，请稍后重试");
		});
};

const dialogVisible = ref(false); // 控制对话框的显示和隐藏
const updateAnimalTypeInfo = (index: number | undefined) => {
	if (index === undefined) {
		currentAnimalInfo.value = {} as AnimalInfo;
		dialogVisible.value = true;
		return;
	}
	currentAnimalInfo.value = { ...tableData.value[index] };
	dialogVisible.value = true;
};

const handleSelectionChange = (val: AnimalInfo[]) => {
	delList.value = val.map((item) => item.id);
};
const delList = ref<number[]>([]);
const handleDel = () => {
	if (delList.value.length === 0) {
		ElMessage.warning("请选择要删除的记录");
		return;
	}
	ElMessageBox.confirm("确认删除选中记录吗？", "提示", {
		confirmButtonText: "确定",
		cancelButtonText: "取消",
		type: "warning",
	})
		.then(() => {
			const data = delList.value;
			AnimalInfoDel(data)
				.then((response) => {
					const res = response.data as CommonResp;
					if (res.code === 0) {
						delList.value = [] as number[];
						ElMessage.success("删除成功");
						fetchAnimalInfo();
					}
				})
				.catch((error) => {
					ElMessage.error("删除失败，请稍后重试");
				});
		})
		.catch(() => {
			ElMessage({
				type: "info",
				message: "已取消删除",
			});
		});
};
</script>