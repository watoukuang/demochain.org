<template>
  <div class="block-page">
    <ClientOnly>
      <div class="contain">
        <a-card class="r-card">
          <template #title>
            <span class="block-title">区块</span>
          </template>
          <template #extra>
            <a-button @click="mine" :loading="loading" class="green-btn">⛏️ 挖矿</a-button>
          </template>
          <a-form :labelCol="{ span: 3 }" :wrapperCol="{ span: 21 }" class="r-form">
            <a-form-item label="高度">
              <a-input-number
                v-model:value="height"
                style="width: 100%"
                min="1"
                @change="changeHash"
                class="transparent-input"
              >
                <template #addonBefore>
                  <span>#</span>
                </template>
              </a-input-number>
            </a-form-item>
            <a-form-item label="随机数">
              <a-input-number
                v-model:value="nonce"
                min="1"
                :max="maxNonce"
                style="width: 100%"
                @change="changeHash"
                class="transparent-input"
              />
            </a-form-item>
            <a-form-item label="数据">
              <a-textarea :rows="6" v-model:value="data" @change="changeHash" class="textarea" />
            </a-form-item>
            <a-form-item label="哈希">
              <a-input disabled v-model:value="hash" style="font-size: 12px" class="hash-input" />
            </a-form-item>
          </a-form>
        </a-card>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CryptoJS from 'crypto-js'

const height = ref(1)
const hash = ref('0000f727854b50bb95c054b39c1fe5c92e5ebcfa4bcb5dc279f56aa96a365e5a')
const nonce = ref(72608)
const data = ref('')
const maxNonce = 500000
const difficulty = 4
const pattern = '0'.repeat(difficulty)

const changeHash = () => {
  const str = height.value + nonce.value + data.value
  hash.value = CryptoJS.SHA256(str).toString()
}

const loading = ref(false)

const mine = async () => {
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 300))
  const val = data.value
  for (let i = 0; i <= maxNonce; i++) {
    const input = `${height.value}${i}${val}`
    const encryption = CryptoJS.SHA256(input).toString()
    if (encryption.substring(0, difficulty) === pattern) {
      nonce.value = i
      hash.value = encryption
      break
    }
  }
  loading.value = false
}
</script>

<style>
.block-page {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.block-page .contain {
  margin-top: 15vh;
}

.block-page .r-card {
  background: linear-gradient(135deg, #2a2c36, #172e1f);
  margin-top: 10vh;
  min-width: 620px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  color: white;
}

.block-title {
  font-size: 1.5rem;
  color: #fab301;
}

.r-form {
  color: white;
}

.r-form .ant-form-item-label > label {
  color: white !important;
}

.transparent-input,
.hash-input,
.textarea {
  background: rgba(0, 0, 0, 0.2) !important;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white !important;
}

.transparent-input .ant-input-number-input {
  background: transparent !important;
  color: white !important;
}

.transparent-input .ant-input-number-handler-wrap {
  background: rgba(0, 0, 0, 0.3) !important;
  border-left: 1px solid rgba(255, 255, 255, 0.2) !important;
}

.transparent-input .ant-input-number-handler {
  color: rgba(255, 255, 255, 0.8) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2) !important;
}

.transparent-input .ant-input-number-handler:hover {
  background: rgba(255, 255, 255, 0.1) !important;
}

.transparent-input .ant-input-number-group-addon {
  background: rgba(0, 0, 0, 0.3) !important;
  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;
  color: white !important;
}

.green-btn {
  border-color: #00b300;
  color: #00b300;
}

.green-btn:hover {
  background: rgba(0, 179, 0, 0.1) !important;
}

/* ✅ 移动端样式兼容 */
@media (max-width: 768px) {
  .r-card {
    min-width: auto !important;
    width: 100% !important;
    box-sizing: border-box;
    padding: 16px;
  }

  .block-container {
    padding: 0 1rem;
  }

  .contain {
    margin-top: 10vh;
  }

  .block-title {
    font-size: 1.25rem;
  }

  .textarea,
  .hash-input,
  .transparent-input {
    font-size: 14px;
  }
}
</style>
