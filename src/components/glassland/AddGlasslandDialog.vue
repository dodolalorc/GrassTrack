<template>
  <el-dialog v-model="visible" width="50%">
    <template #header>
      <div class="w-full text-center font-extrabold text-2xl">
        牧场信息表  
      </div>
    </template>
    <el-form
      label-width="100px"
      class="w-full"
      ref="formRef"
      :model="glasslandInfo"
      :rules="rules"
    >
      <el-form-item label="草场ID" prop="grassId">
        <el-input v-model="glasslandInfo.grassId" type="number" placeholder="请输入草场ID" />
      </el-form-item>
      <el-form-item label="草场面积" prop="area">
        <el-input v-model="glasslandInfo.area" type="number" placeholder="请输入草场面积">
          <template #suffix>
            <span class="text-sm">亩</span>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="草场类型" prop="type">
        <el-input v-model="glasslandInfo.type" placeholder="请输入草场类型" />
      </el-form-item>
      <el-form-item label="草场产量" prop="yield">
        <el-input v-model="glasslandInfo.yield" type="number" placeholder="请输入草场产量">
          <template #suffix>
            <span class="text-sm">斤</span>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="年份" prop="year">
        <el-input v-model="glasslandInfo.year" type="number" placeholder="请输入年份">
          <template #suffix>
            <span class="text-sm">年</span>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="月份" prop="month">
        <el-select v-model="glasslandInfo.month" placeholder="请选择月份">
          <el-option
            v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"
            :key="item"
            :label="item + '月'"
            :value="item"
          />
        </el-select>
      </el-form-item>

      <div class="w-full flex justify-end items-center mt-10 text-xl">
        <el-button class="ml-4" @click="$emit('update:visible', false)">取消</el-button>
        <el-button class="ml-4" @click="submitForm(formRef)">确定</el-button>
      </div>
    </el-form>
  </el-dialog>
</template>

<script setup lang="ts">
import type { grasslandInfo } from "@/types/apis/grassland";
import { ElMessage, ElMessageBox } from "element-plus";
import type { FormInstance, ElForm } from "element-plus";
import { ref } from "vue";

const visible = defineModel("visible", {
	default: false,
	type: Boolean,
	required: true,
});
const glasslandInfo = defineModel("glassland-info", {
	default: {
		grassId: 0,
		area: 0,
		type: "",
		yield: 0,
		year: 0,
		month: 0,
	} as grasslandInfo,
	type: Object,
	required: true,
});

const tableData = defineModel("table-data", {
	default: [],
	type: Array,
	required: true,
});
const formRef = ref<FormInstance>();
const rules = {
	grassId: [
		{ required: true, message: "请输入草场ID", trigger: "blur" },
		{ type: "number", message: "草场ID必须为数字", trigger: "blur" },
	],
	area: [
		{ required: true, message: "请输入草场面积", trigger: "blur" },
		{ type: "number", message: "草场面积必须为数字", trigger: "blur" },
	],
	type: [{ required: true, message: "请输入草场类型", trigger: "blur" }],
	yield: [
		{ required: true, message: "请输入草场产量", trigger: "blur" },
		{ type: "number", message: "草场产量必须为数字", trigger: "blur" },
	],
	year: [
		{ required: true, message: "请输入年份", trigger: "blur" },
		{ type: "number", message: "年份必须为数字", trigger: "blur" },
	],
	month: [{ required: true, message: "请选择月份", trigger: "change" }],
};

const submitForm = async (formEl: FormInstance | undefined) => {
	if (!formEl) {
		ElMessage.error("表单不存在");
		return;
	}
	await formEl.validate((valid, fields) => {
		if (valid) {
			ElMessageBox.confirm("确认提交吗？", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning",
			}).then(() => {
				visible.value = false;
				sendUpdateInfo();
			});
		} else {
			ElMessage.error("请填写完整信息");
		}
	});
};
const sendUpdateInfo = () => {
	// TODO: 发送更新信息的请求
	console.log("发送更新信息的请求", glasslandInfo.value);
};
</script>