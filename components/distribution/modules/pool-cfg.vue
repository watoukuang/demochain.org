<template>
  <a-card class="diste r-card">
    <template #title>
      <span class="card-title">配置</span>
    </template>
    <a-form>
      <a-row justify="space-between">
        <a-col v-for="(computer, index) in computers" :key="computer.value" :span="7">
          <a-form-item :label="'电脑' + String.fromCharCode(65 + index)">
            <a-select
                v-model:value="gpuRefs[index]"
                :options="computers"
                @change="() => handleChange(index)"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-form-item label="数据" style="margin-top: 10px">
        <a-textarea :rows="7" v-model:value="data" @change="changeData"/>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const computers = [
  { value: '1', label: "4核GPU" },
  { value: '2', label: "8核GPU" },
  { value: '3', label: "16核GPU" }
];

const gpuRefs = ref(['1', '2', '3']);
const data = ref(null);

const reset = () => {
  data.value = null;
  gpuRefs.value = ['1', '2', '3'];
};

const emit = defineEmits();

const handleChange = (index: number) => {
  const gpu = gpuRefs.value[index];
  emit("fetch-gpu", { machine: String.fromCharCode(65 + index), gpu });
};

const changeData = () => emit('fetch-data', data.value);

defineExpose({ reset });
</script>

<style>
.diste.r-card {
  border-color: #fab301;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #2a2c36, #172e1f);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  color: white;
  min-height: 370px;
}

.diste.r-card .card-title {
  font-size: 18px;
  color: #f14545;
}

/* 设置表单标签颜色为黄色 */
.diste.r-card .ant-form-item-label > label {
  color: #fab301 !important;
}

/* 黄色按钮样式（备用） */
.diste.r-card .yellow-btn {
  border-color: #fab301;
  color: #fab301;
}

</style>