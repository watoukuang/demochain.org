<template>
  <div class="sha256-container">
    <ClientOnly>
      <div class="sha256-contain">
        <p class="sha256-title">
          区块链<span class="sha256-highlight">在线演示平台</span>
        </p>
        <a-card class="sha256-card">
          <template #title>
            <span class="hash-title">SHA256</span>
          </template>
          <a-form :labelCol="{ span: 2 }" :wrapperCol="{ span: 22 }" class="sha256-form">
            <a-form-item label="数据">
              <a-textarea
                :rows="6"
                v-model:value="data"
                @change="onChange"
                class="textarea"
              />
            </a-form-item>
            <a-form-item label="哈希">
              <a-input disabled v-model:value="hash" class="hash-input" />
            </a-form-item>
          </a-form>
        </a-card>

        <div class="sha256-ad">
          <h1>WaTouKuang</h1>
          <p>加入我们，一起探索数字货币未来！</p>
          <button class="cta-button" @click="toWatouKuang">点击进入</button>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CryptoJS from 'crypto-js'

const hash = ref('e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855')
const data = ref('')

const onChange = () => {
  hash.value = CryptoJS.SHA256(data.value).toString()
}

const toWatouKuang = () => {
  window.location.href = 'https://watoukuang.com'
}
</script>

<style>
.sha256-container {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;
}

.sha256-contain {
  margin-top: 10vh;
  width: 100%;
  max-width: 800px;
}

.sha256-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: #fab301;
}

.sha256-highlight {
  color: #ff4500;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  font-weight: bold;
}

.sha256-card {
  margin-top: 5vh;
  width: 100%;
  background: linear-gradient(135deg, #2a2c36, #172e1f);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  color: white;
}

.sha256-card .hash-title {
  font-size: 1.5rem;
  color: #fab301;
}

.sha256-form {
  color: white;
}

.sha256-form .ant-form-item-label > label {
  color: white !important;
}

.sha256-form .ant-input,
.sha256-form .ant-input-disabled {
  color: white !important;
}

.textarea,
.hash-input {
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(0, 0, 0, 0.2) !important;
  color: white;
}

/* 广告区域 */
.sha256-ad {
  background-color: #37ff18;
  color: #172636;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  margin-top: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.sha256-ad h1 {
  font-size: 36px;
  margin: 0 0 10px;
}

.sha256-ad p {
  font-size: 16px;
  margin: 10px 0;
}

.cta-button {
  background: #172636;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background 0.3s;
}

.cta-button:hover {
  background: #1a1a1a;
}

/* ✅ 响应式优化 */
@media (max-width: 768px) {
  .sha256-title {
    font-size: 1.8rem;
  }

  .sha256-card .hash-title {
    font-size: 1.2rem;
  }

  .sha256-ad h1 {
    font-size: 24px;
  }

  .sha256-ad p {
    font-size: 14px;
  }

  .cta-button {
    padding: 8px 16px;
    font-size: 14px;
  }
}
</style>
