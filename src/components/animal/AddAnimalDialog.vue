<template>
  <el-dialog v-model="visible" width="50%">
    <template #header>
      <div class="w-full text-center font-extrabold text-2xl">
        家畜种类信息表
      </div>
    </template>
    <div class="w-full flex justify-center items-center">
      <div class="w-full flex justify-center items-center">
        <div class="w-full flex justify-center items-center">
          <el-form label-width="100px" class="w-full" ref="formRef" :model="animialInfo" :rules="rules">
            <el-form-item label="种类名称" prop="species">
              <el-input v-model="animialInfo.species" placeholder="请输入家畜种类名称" type="text" />
            </el-form-item>
            <el-form-item label="数量" prop="quantity">
              <el-input v-model="animialInfo.quantity" type="number" placeholder="请输入数量">
                <template #suffix>
                  <span class="text-sm">只</span>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item label="年份" prop="year">
              <el-input v-model="animialInfo.year" type="number" placeholder="请输入年份">
                <template #suffix>
                  <span class="text-sm">年</span>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item label="月份" prop="month">
              <el-select v-model="animialInfo.month" placeholder="请选择月份">
                <el-option v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]" :key="item" :label="item + '月'"
                  :value="item" />
              </el-select>
              <!-- <el-input v-model="animialInfo.month" type="number" placeholder="请输入月份">
                <template #suffix>
                  <span class="text-sm">月</span>
                </template>
              </el-input> -->
            </el-form-item>
            <el-form-item label="家畜种类" prop="typeId">
              <el-select v-model="animialInfo.typeId" placeholder="请选择家畜种类">
                <el-option v-for="item in animalTypeList" :key="item.id" :label="item.name" :value="item.id" />
              </el-select>
            </el-form-item>
            <div class="w-full flex justify-end items-center mt-10 text-xl">
              <el-button class="ml-4" @click="visible = false">取消</el-button>
              <el-button class="ml-4" @click="submitForm(formRef)">确定</el-button>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import { AnimalInfoAdd, AnimalInfoList } from '@/api/apis/animal';
import { AnimalInfo, AnimalTypeInfo } from '@/types/AnimalInfo';
import { CommonResp } from '@/types/apis/common';
import { ElMessage, ElMessageBox } from 'element-plus';
import { ref, reactive } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';

const visible = defineModel('visible', {
  default: false,
  type: Boolean,
  required: true,
});
const animalTypeList = defineModel('animalTypeList', {
  default: [],
  type: Array as () => Array<AnimalTypeInfo>,
  required: true,
});
const animialInfo = defineModel('animalInfo', {
  default: {
    id: 0,
    species: '',
    quantity: 0,
    year: 2000,
    month: 1,
    farmId: 0,
    typeId: 0,
  },
  type: Object as () => AnimalInfo,
  required: true,
});
const tableData = defineModel('tableData', {
  default: [] as Array<AnimalInfo>,
  type: Array as () => Array<AnimalInfo>,
  required: true,
})

const formRef = ref<FormInstance>();
const rules = reactive<FormRules<AnimalInfo>>({
  species: [
    { required: true, message: '请输入家畜种类名称', trigger: 'blur' },
  ],
  quantity: [
    { required: true, message: '请输入数量', trigger: 'blur' },
    { min: 1, message: '数量必须大于0', trigger: 'blur' },
  ],
  year: [
    { required: true, message: '请输入年份', trigger: 'blur' },
    { max: new Date().getFullYear(), message: '年份必须小于当前年份', trigger: 'blur' },
  ],
  month: [
    { required: true, message: '请输入月份', trigger: 'blur' },
  ],
  typeId: [
    { required: true, message: '请输入家畜种类', trigger: 'blur' },
  ]
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) {
    ElMessage.error('表单不存在')
    return
  }
  await formEl.validate((valid, fields) => {
    if (valid) {
      ElMessageBox.confirm('确认提交吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        visible.value = false;
        sendUpdateInfo();
      });
    } else {
      ElMessage.error('请填写完整信息');
    }
  })
};

const sendUpdateInfo = () => {
  AnimalInfoAdd(animialInfo.value).then((response) => {
    const res = response.data as CommonResp;
    if (res.code === 0) {
      ElMessage.success('成功添加' + animialInfo.value.species + '的信息');
    } else {
      ElMessage.error('添加失败');
    }
  }).finally(() => {
    fetchAnimalInfo();
    visible.value = false;
  })
}

const fetchAnimalInfo = () => {
  AnimalInfoList().then((response) => {
    const res = response.data as CommonResp;
    if (res.code === 0) {
      tableData.value = res.data;
    }
  }).catch((error) => {
  });
}
</script>