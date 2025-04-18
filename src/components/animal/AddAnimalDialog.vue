<template>
  <el-dialog v-model="visible" width="50%">
    <div class="w-full flex justify-center items-center">
      <div class="w-full flex justify-center items-center">
        <div class="w-full flex justify-center items-center">
          <el-form label-width="80px" class="w-full" :model="form" :rules="rules">
            <el-form-item label="牲畜种类" prop="name">
              <el-input v-model="form.name" placeholder="请输入牲畜种类" />
            </el-form-item>
            <el-form-item label="最小数量" prop="min">
              <el-input v-model="form.min" type="number" placeholder="请输入最小数量" />
            </el-form-item>
            <el-form-item label="最大数量" prop="max">
              <el-input v-model="form.max" type="number" placeholder="请输入最大数量" />
            </el-form-item>
            <el-form-item label="目标数量" prop="goal">
              <el-input v-model="form.goal" type="number" placeholder="请输入目标数量" />
            </el-form-item>
            <el-form-item label="动物需求数量" prop="need">
              <el-input v-model="form.need" type="number" placeholder="请输入动物需求数量" />
            </el-form-item>
            <div class="w-full flex justify-end items-center mt-10 text-xl">
              <el-button class="ml-4">取消</el-button>
              <el-button class="ml-4">确定</el-button>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import { AnimalTypeInfo } from '@/types/AnimalInfo';
import { ref } from 'vue';
const visible = defineModel('visible', {
  default: false,
  type: Boolean,
});

const form = ref<AnimalTypeInfo>({
  id: 0,
  name: '',
  type: '',
  min: 0,
  max: 0,
  goal: 0,
  need: 0,
});

const rules = {
  name: [
    { required: true, message: '请输入牲畜种类', trigger: 'blur' },
  ],
  min: [
    { required: true, message: '请输入最小数量', trigger: 'blur' },
  ],
  max: [
    { required: true, message: '请输入最大数量', trigger: 'blur' },
  ],
  goal: [
    { required: true, message: '请输入目标数量', trigger: 'blur' },
  ],
  need: [
    { required: true, message: '请输入动物需求数量', trigger: 'blur' },
  ],
};
</script>