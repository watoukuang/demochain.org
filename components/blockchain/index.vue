<template>
  <div class="chain-page">
    <ClientOnly>
      <!-- 页面布局 -->
      <div class="chain-layout">
        <!-- 数据输入 -->
        <div class="chain-input">
          <x-data ref="xData" @fetch-data="callback" />
        </div>

        <!-- 区块链展示 -->
        <div class="chain-blocks">
          <a-card class="chain-card">
            <template #title>
              <span class="chain-title">公链</span>
            </template>
            <template #extra>
              <a-button plain @click="mine" :loading="loading" danger>⛏️ 挖矿</a-button>
              <span>&nbsp;&nbsp;</span>
              <a-button plain @click="reset">重置</a-button>
            </template>

            <div class="chain-card-box">
              <block-card
                v-for="item in blocks"
                :block="item"
                :key="item.height"
                class="chain-block"
              />
            </div>
          </a-card>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import BlockCard from './modules/block-card.vue';
import XData from './modules/x-data.vue';
import { Block } from '@/types/block'
import { ref, reactive } from 'vue'
import CryptoJS from 'crypto-js'
import { message } from 'ant-design-vue'

const xData = ref<InstanceType<typeof XData>>()
const loading = ref(false)
const data = ref("")
const blocks = reactive([createInitialBlock()])

const maxNonce = 500000
const difficulty = 4
const pattern = '0'.repeat(difficulty)

function createInitialBlock(): Block {
  return {
    height: 1,
    nonce: 49691,
    data: '第一笔交易记录数据',
    previous: '0'.repeat(64),
    hash: '0000b61c8bb61a6faa7c46e4872623b6e4caac5a0ae3a3b416849b216d0d62f6'
  }
}

const mine = async () => {
  if (!data.value.trim()) {
    message.warning('请输入有效的数据后再挖矿')
    return
  }

  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))

  const lastBlock = blocks[blocks.length - 1]
  const newBlock = findValidBlock(lastBlock, data.value)

  if (newBlock) {
    blocks.push(newBlock)
    message.success(`成功挖到区块 #${newBlock.height}`)
  } else {
    message.warning('未找到符合条件的区块，请调整数据后重试')
  }

  loading.value = false
}

const findValidBlock = (lastBlock: Block, newData: string): Block | null => {
  const height = lastBlock.height + 1
  const previous = lastBlock.hash

  for (let nonce = 0; nonce <= maxNonce; nonce++) {
    const input = `${height}${nonce}${newData}${previous}`
    const hash = CryptoJS.SHA256(input).toString()
    if (hash.startsWith(pattern)) {
      return { height, nonce, data: newData, previous, hash }
    }
  }

  return null
}

const reset = () => {
  blocks.splice(0, blocks.length, createInitialBlock())
  data.value = ""
  xData.value?.reset()
  message.info('区块链已重置')
}

const callback = (res: string) => {
  data.value = res
}
</script>

<style>
.chain-page {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 24px;
  box-sizing: border-box;
}

.chain-page .chain-layout {
  margin-top: 40px;
  display: flex;
  gap: 24px;
  align-items: flex-start;
  flex-wrap: wrap;
}

.chain-page .chain-blocks {
  flex: 2;
  min-width: 0;
}

.chain-page .chain-input {
  flex: 1;
  min-width: 0;
  display: flex;
  justify-content: center;
}

/* 卡片样式 */
.chain-page .chain-card {
  background: linear-gradient(135deg, #2a2c36, #172e1f);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  color: white;
  border-radius: 12px;
}

/* 标题样式 */
.chain-page .chain-title {
  font-size: 1.5rem;
  color: #fab301;
}

/* 内容容器 */
.chain-page .chain-card-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: calc(80vh - 100px);
  overflow-y: auto;
  padding: 10px;
}

/* 区块卡片 */
.chain-page .chain-block {
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px;
}
.chain-page .chain-block:last-child {
  margin-bottom: 0;
}

/* 移动端适配 */
@media (max-width: 1200px) {
  .chain-page .chain-layout {
    flex-direction: column;
  }

  .chain-page .chain-input,
  .chain-page .chain-blocks {
    width: 100%;
  }

  .chain-page .chain-input {
    justify-content: center;
    margin-bottom: 20px;
  }
}

/* 强制覆盖 Ant Design 样式 */
.chain-page :deep(.ant-card) {
  background: linear-gradient(135deg, #2a2c36, #172e1f) !important;
  color: white !important;
  border: none !important;
}
.chain-page :deep(.ant-card-head-title) {
  color: #fab301 !important;
  font-size: 1.5rem !important;
}
.chain-page :deep(.ant-btn) {
  background: transparent !important;
  color: white !important;
  border: 1px solid #999 !important;
}
.chain-page :deep(.ant-btn:hover) {
  border-color: #fab301 !important;
  color: #fab301 !important;
}
.chain-page :deep(.ant-btn-dangerous) {
  border-color: #ff4d4f !important;
  color: #ff4d4f !important;
}
</style>
