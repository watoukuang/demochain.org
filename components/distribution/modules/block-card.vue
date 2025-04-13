<template>
  <a-card class="diste block-card-container">
    <template #title>
      <span class="card-title">区块</span>
    </template>
    <a-form :labelCol="{ span: 4 }" :wrapperCol="{ span: 20 }" class="r-form">
      <a-form-item label="高度">
        <a-input-number
          v-model:value="block.height"
          class="transparent-input"
          style="width: 100%"
          min="1"
        >
          <template #addonBefore>
            <span>#</span>
          </template>
        </a-input-number>
      </a-form-item>

      <a-form-item label="随机数">
        <a-input-number
          v-model:value="block.nonce"
          class="transparent-input"
          min="1"
          max="500000"
          style="width: 100%"
        />
      </a-form-item>

      <a-form-item label="数据">
        <a-textarea
          :rows="4"
          v-model:value="block.data"
          class="text-area transparent-input"
        />
      </a-form-item>

      <a-form-item label="前指针">
        <a-textarea
          class="hash-input"
          :rows="2"
          disabled
          v-model:value="block.previous"
        />
      </a-form-item>

      <a-form-item label="哈希">
        <a-textarea
          class="hash-input"
          :rows="2"
          disabled
          v-model:value="block.hash"
        />
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { Block } from "@/types/block";

const { block } = defineProps<{ block: Block }>();
</script>

<style scoped>
.diste.block-card-container {
  min-width: 400px;
  background: linear-gradient(135deg, #2a2c36, #172e1f);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  border: 1px solid #fab301;
  border-radius: 12px;
  color: white;
}

/* 标题颜色统一为主题黄 */
.card-title {
  font-size: 18px;
  color: #fab301;
}

/* 表单标签白色 */
.r-form :deep(.ant-form-item-label > label) {
  color: white !important;
  font-weight: bold;
}

/* 背景透明 + 字体黄色的输入样式 */
.diste :deep(.transparent-input),
.diste :deep(.transparent-input input),
.diste :deep(.transparent-input textarea),
.diste .text-area,
.diste .hash-input {
  background-color: transparent !important;
  color: #fab301 !important;
  border: 1px solid rgba(255, 255, 255, 0.3) !important;
  font-size: 12px !important;
}

/* 禁用状态的颜色保持黄色 */
.diste :deep(.ant-input-disabled),
.diste :deep(.ant-input[disabled]),
.diste :deep(textarea[disabled]) {
  color: #fab301 !important;
  background-color: transparent !important;
}
</style>
