<template>
  <a-card class="chain-r-card">
    <template #title>
      <span class="card-title">数据</span>
    </template>
    <template #extra>
      <a-button @click="reset" class="yellow-btn">重置</a-button>
    </template>
    <a-textarea
      :rows="8"
      v-model:value="data"
      @change="change"
      placeholder="请输入数据!"
      class="text-area"
    />
  </a-card>
</template>

<script setup lang="ts">
import { ref } from "vue"

const data = ref("")
const emit = defineEmits()

const reset = () => {
  data.value = ""
  change()
}
const change = () => emit("fetch-data", data.value)

defineExpose({ reset })
</script>

<style scoped>
.chain-r-card {
  border-color: #fab301;
  width: 100%;
  max-width: 620px;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #2a2c36, #172e1f);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  color: white;
}
.chain-r-card .card-title {
  font-size: 18px;
  color: #f14545;
}
.text-area {
  background-color: rgba(0, 0, 0, 0.2) !important;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white !important;
}
.yellow-btn {
  border-color: #fab301;
  color: #fab301;
}
</style>
