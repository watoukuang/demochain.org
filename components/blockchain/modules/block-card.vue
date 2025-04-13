<template>
  <div class="chain-block-card">
    <a-card class="r-card">
      <template #title>
        <span class="title-label">区块&nbsp;</span>
        <span class="title-value">{{ block.height }}</span>
      </template>
      <a-form :labelCol="{ span: 3 }" :wrapperCol="{ span: 21 }" class="r-form">
        <a-form-item label="高度">
          <a-input-number disabled v-model:value="block.height" style="width: 100%">
            <template #addonBefore><span>#</span></template>
          </a-input-number>
        </a-form-item>
        <a-form-item label="随机数">
          <a-input-number disabled v-model:value="block.nonce" min="1" max="500000" style="width: 100%" />
        </a-form-item>
        <a-form-item label="数据">
          <a-textarea disabled :rows="6" v-model:value="block.data" class="text-area"/>
        </a-form-item>
        <a-form-item label="前指针">
          <a-input disabled v-model:value="block.previous" class="hash-input" />
        </a-form-item>
        <a-form-item label="哈希">
          <a-input disabled v-model:value="block.hash" class="hash-input" />
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { Block } from '@/types/block'

const { block } = defineProps<{ block: Block }>()
</script>

<style scoped>
.chain-block-card .r-card {
  border-color: #fab301;
  width: 100%;
  max-width: 620px;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #2a2c36, #172e1f);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  color: white;
  border-radius: 12px;
}

.chain-block-card .title-label {
  font-size: 18px;
  color: #fab301;
}
.chain-block-card .title-value {
  font-size: 18px;
  color: #f14545;
}

.chain-block-card .r-form {
  color: white;
}

/* 👇 深度样式确保 Ant Design 标签文字不被覆盖 */
.chain-block-card :deep(.ant-form-item-label > label) {
  color: white !important;
  font-weight: bold;
}

/* 👇 输入框统一颜色 */
.chain-block-card :deep(.ant-input),
.chain-block-card :deep(.ant-input-disabled),
.chain-block-card :deep(.ant-input-number-input) {
  color: white !important;
  background-color: rgba(0, 0, 0, 0.2) !important;
  border: 1px solid rgba(255, 255, 255, 0.3) !important;
}

/* 自定义 class 的输入区域样式 */
.chain-block-card .text-area,
.chain-block-card .hash-input {
  background-color: rgba(0, 0, 0, 0.2) !important;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white !important;
  font-size: 12px;
}
</style>
