<template>
  <div>
    <!-- 搜索框 -->
    <div class="search-section">
      <div class="search-card">
        <div class="search-wrapper">
          <a-select
            v-model:value="searchEngine"
            class="engine-selector"
            size="large"
          >
          <a-select-option value="BTC">
            <span class="search-option">
              <img src="../../../public/entry/bitcoin.png" class="search-engine-icon" alt="BTC" />
              BTC
            </span>
          </a-select-option>
          <a-select-option value="ETH">
            <span class="search-option">
              <img src="../../../public/entry/ethereum.png" class="search-engine-icon" alt="ETH" />
              ETH
            </span>
          </a-select-option>
          <a-select-option value="SOL">
            <span class="search-option">
              <img src="../../../public/entry/solana.png" class="search-engine-icon" alt="SOL" />
              SOL
            </span>
          </a-select-option>
          </a-select>
          <a-input
            v-model:value="searchQuery"
            placeholder="输入关键词搜索技术文档、API参考等..."
            size="large"
            @pressEnter="handleSearch"
            class="search-input"
            allow-clear
          >
            <template #prefix>
              <SearchOutlined class="search-input-icon" />
            </template>
          </a-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue'
const SearchOutlined = defineAsyncComponent(() =>
  import('@ant-design/icons-vue').then(m => m.SearchOutlined)
)

const searchQuery = ref('')
const searchEngine = ref('BTC')

const handleSearch = () => {
  if (!searchQuery.value.trim()) return
  const encodedQuery = encodeURIComponent(searchQuery.value)

  const engineMap = {
    BTC: `https://btc.com/search?q=${encodedQuery}`,
    ETH: `https://etherscan.io/search?f=0&q=${encodedQuery}`,
    SOL: `https://solscan.io/search?q=${encodedQuery}`
  }

  const url = engineMap[searchEngine.value] || `https://www.google.com/search?q=${encodedQuery}`
  window.open(url, '_blank')
}

const navigateTo = url => window.open(url, '_blank')
</script>

<style scoped>
/* 工具栏样式 */
.toolbar {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 1.5rem;
}

:root.dark .toolbar .ant-btn {
  color: #fff;
}

/* 搜索区域样式 */
.search-section {
  display: flex;
  justify-content: center;
}

.search-card {
  padding: 2.5rem 2rem;
  border-radius: 16px;
  width: 100%;
  max-width: 900px;
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.1);
  backdrop-filter: blur(8px);
  text-align: center;
}

.search-wrapper {
  display: flex;
  gap: 12px;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
}

.engine-selector {
  width: 180px !important;
  flex-shrink: 0;
}

.engine-selector :deep(.ant-select-selector) {
  height: 48px !important;
  display: flex !important;
  align-items: center !important;
  background-color: rgba(255, 255, 255, 0.8) !important;
  border: 1px solid rgba(0, 0, 0, 0.1) !important;
}

.engine-selector :deep(.ant-select-selection-item) {
  height: 40px !important;
}

.search-option {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
  background: linear-gradient(to right, red, orange);
  -webkit-background-clip: text;
  color: transparent;
}

.search-engine-icon {
  width: 16px;
  height: 16px;
}

.search-input {
  flex: 1;
  min-width: 0;
  font-size: 1.1rem;
  height: 48px;
}

.search-input :deep(.ant-input) {
  padding: 10px 16px 10px 40px !important;
  height: 100% !important;
}

.search-input-icon {
  color: var(--vp-c-text-3);
  font-size: 16px;
}

/* 深色模式 */
:root.dark {
  .search-card {
    background-color: rgba(30, 30, 30, 0.9);
    border-color: rgba(255, 255, 255, 0.1);
  }

  .engine-selector :deep(.ant-select-selector),
  .search-input :deep(.ant-input) {
    border-color: rgba(255, 255, 255, 0.1) !important;
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .search-wrapper {
    flex-direction: column;
  }

  .engine-selector,
  .search-input {
    width: 100% !important;
  }

  .search-card {
    padding: 1.5rem;
  }
}
</style>
