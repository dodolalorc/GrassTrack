<template>
  <div class="w-full min-h-full text-3xl flex flex-col py-20 bg-white/90 rounded-xl">
    <h1 class="text-center text-4xl font-bold mb-10">
      牧场管理
    </h1>
    <div>
      <div class="flex justify-between items-center mb-4">
        <div class="flex w-1/3 justify-between items-center mb-4 pl-5">
          <el-input v-model="search" placeholder="请输入搜索内容" class="w-1/2" />
          <el-button type="primary" class="ml-4">搜索</el-button>
        </div>
        <div class="flex items-center pr-10">
          <el-button type="primary">
            <font-awesome-icon icon="fa-solid fa-plus" />
            添加牧场
          </el-button>
        </div>
      </div>
      <el-table stripe :data="tableData" class="w-full" style="width: 100%" row-key="id" border default-expand-all>
        <el-table-column prop="name" label="牧场名称" sortable />
        <el-table-column prop="date" label="创建时间" sortable />
        <el-table-column prop="area" label="牧场大小（亩）" sortable />
        <el-table-column prop="animal" label="牲畜种类" sortable />
        <el-table-column prop="quantity" label="牲畜数量" sortable />
        <el-table-column prop="price" label="牲畜价格" sortable />
        <el-table-column prop="status" label="牧场状态">
          <template #default="{ row }">
            <el-tag v-if="row.status === 0" type="success" size="large" effect="dark" round>优良</el-tag>
            <el-tag v-else-if="row.status === 1" type="warning" size="large" effect="dark" round>欠佳</el-tag>
            <el-tag v-else-if="row.status === 2" type="danger" size="large" effect="dark" round>危险</el-tag>
            <el-tag v-else-if="row.status === 3" type="info" size="large" effect="dark" round>未评估</el-tag>
            <el-tag v-else-if="row.status === 4" type="primary" size="large" effect="dark" round>普通</el-tag>
            <el-tag v-else-if="row.status === 5" type="success" size="large" effect="dark" round>优良</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="牧场位置" />
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
</template>

<script setup lang="ts">
import { ref } from 'vue'

const search = ref('');

interface Forage {
  id: number
  name: string
  date: string
  area: string
  animal: string
  quantity: number
  price: number
  status: string | number
  address: string
}

const tableData = ref<Forage[]>([
  {
    id: 1,
    name: '绵羊牧场',
    date: '2021-09-01',
    area: '200',
    animal: '绵羊',
    quantity: 10,
    price: 100,
    status: 0,
    address: '123 Main St, New York, NY 10030'
  },
  {
    id: 2,
    name: '山羊牧场',
    date: '2021-09-02',
    area: '300',
    animal: '山羊',
    quantity: 5,
    price: 50,
    status: 1,
    address: '456 Main St, New York, NY 10030'
  },
  {
    id: 3,
    name: '肉牛牧场',
    date: '2021-09-03',
    area: '800',
    animal: '肉牛',
    quantity: 15,
    price: 150,
    status: 2,
    address: '789 Main St, New York, NY 10030'
  },
  {
    id: 4,
    name: '奶牛牧场',
    date: '2021-09-03',
    area: '200',
    animal: '奶牛',
    quantity: 15,
    price: 150,
    status: 3,
    address: '789 Main St, New York, NY 10030'
  },
  {
    id: 5,
    name: '奶牛牧场2',
    date: '2021-09-03',
    area: '100',
    animal: '奶牛',
    quantity: 15,
    price: 150,
    status: 4,
    address: '789 Main St, New York, NY 10030'
  },
  {
    id: 6,
    name: '绵羊牧场2',
    date: '2021-09-03',
    area: '400',
    animal: '绵羊',
    quantity: 15,
    price: 150,
    status: 5,
    address: '789 Main St, New York, NY 10030'
  }
])
</script>