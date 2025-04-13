<script setup>
import {ref} from 'vue';
import CoinScan from './modules/coin-scan.vue';
const navSections = ref([
  {
    title: '常用网站',
    icon: '🚀',
    key: 'tools',
    items: [
      { id: 1, text: 'RoomData', url: 'https://www.rootdata.com/',remark: '查看链上项目融资' },
      { id: 2, text: 'CryptoLogos', url: 'https://cryptologos.cc/',remark: '加密LOGO' }
      
    ]
  },
  {
    title: '市场数据',
    icon: '💻',
    key: 'market',
    items: [
      { id: 1, text: '非小号', url: 'https://element-plus.org/' },
      { id: 2, text: 'AVE', url: 'https://www.typescriptlang.org/' },
      { id: 3, text: 'DEX Screener', url: 'https://vitejs.dev/' },
      { id: 4, text: 'CMC', url: 'https://webpack.js.org/' },
      { id: 5, text: '币圈日历', url: 'https://webpack.js.org/' },
      { id: 6, text: '比特币巨鲸追踪', url: 'https://webpack.js.org/' },
      { id: 7, text: '以太坊巨鲸追踪', url: 'https://webpack.js.org/' },
      { id: 8, text: '链上大额交易监控', url: 'https://webpack.js.org/' }
    ]
  },
  {
    title: '去中心化钱包',
    icon: '🛠️',
    key: 'wallet',
    items: [
      { id: 1, text: 'ImToken', url: 'https://element-plus.org/' },
      { id: 2, text: 'OKX Web3钱包', url: 'https://www.typescriptlang.org/' },
      { id: 3, text: 'MetaMask', url: 'https://vitejs.dev/' }
    ]
  },
  {
    title: '链上空投平台',
    icon: '🪂',
    key: 'airdrop',
    items: [/* 同上 */]
  },
  {
    title: '去中心化交易所',
    icon: '💱',
    key: 'dex',
    items: [/* 同上 */]
  },
  {
    title: '跨链交易平台',
    icon: '🔗',
    key: 'crosschain',
    items: [/* 同上 */]
  },
  {
    title: '撸毛工具',
    icon: '🧪',
    key: 'airdrop-tools',
    items: [/* 同上 */]
  }
])
const navigateTo = (url) => window.open(url, '_blank');


</script>

<template>
  <div class="nav-container">
    <ClientOnly>
      <!-- 背景粒子效果 -->
      <div class="particles-background"/>
      <!-- 搜索区域 -->
      <coin-scan/>
      <!-- 常用工具区域 -->
      <div
        v-for="section in navSections"
        :key="section.key"
        class="section-container"
      >
        <h3 class="section-title">
          <span class="section-icon">{{ section.icon }}</span>
          <span>{{ section.title }}</span>
        </h3>
        <div class="button-grid">
          <a-button
            v-for="item in section.items"
            :key="item.id"
            class="nav-button"
            @click="navigateTo(item.url)"
          >
            <div class="button-content">
              <span class="button-text">{{ item.text }}</span>
              <span class="button-remark">{{ item.remark }}</span>
            </div>
          </a-button>
      </div>
      </div>
    </ClientOnly>
  </div>
</template>

<style scoped>
.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: calc(100vh - var(--vp-nav-height) - 2rem);
  position: relative;
  z-index: 1;
}

/* 粒子背景样式 */
.particles-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  overflow: hidden;
}

.particles-background::before {
  content: "";
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
  animation: particleMove 100s linear infinite;
}

@keyframes particleMove {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50%, 50%);
  }
}


/* 分区容器样式 */
.section-container {
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  margin-top: 20px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.section-container:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.section-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 1.5rem 0;
  color: var(--vp-c-text-1);
  display: flex;
  align-items: center;
  gap: 10px;
}

.section-icon {
  font-size: 1.5rem;
}

/* 按钮网格布局 */
.button-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
}

.nav-button {
  height: 80px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  padding: 0.5rem;
}

.nav-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.95);
  border-color: rgba(0, 0, 0, 0.1);
}

/* 按钮内容样式 */
.button-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
}

.button-text {
  font-size: 1rem;
  color: var(--vp-c-text-1);
  font-weight: 500;
}

.button-remark{
  font-size: 0.8rem;
  color: var(--vp-c-text-1);
}

/* 深色模式适配 */
:root.dark {
  .search-card,
  .section-container {
    background-color: rgba(30, 30, 30, 0.9);
    border-color: rgba(255, 255, 255, 0.1);
  }

  .nav-button {
    background-color: rgba(40, 40, 40, 0.8);
    border-color: rgba(255, 255, 255, 0.05);
  }

  .nav-button:hover {
    background-color: rgba(50, 50, 50, 0.95);
    border-color: rgba(255, 255, 255, 0.1);
  }

  .particles-background {
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  }

  .particles-background::before {
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  }

  .engine-selector :deep(.ant-select-selector),
  .search-input :deep(.ant-input) {
    border-color: rgba(255, 255, 255, 0.1) !important;
  }
}

/* 响应式设计 */
@media (max-width: 960px) {
  .nav-container {
    padding: 1.5rem;
  }

  .search-card {
    padding: 2rem 1.5rem;
  }

  .button-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
}

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

  .button-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }

  .nav-button {
    height: 70px;
  }
}

@media (max-width: 480px) {
  .search-card {
    padding: 1.5rem 1rem;
  }

  .button-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 0.75rem;
  }

  .nav-button {
    height: 65px;
  }

  .button-text {
    font-size: 0.9rem;
  }
}
</style>
<style scoped>
/* 修改按钮文本样式，添加发光效果 */
.button-text {
  font-size: 1rem;
  color: var(--vp-c-text-1);
  font-weight: 500;
  text-shadow: 0 0 8px rgba(100, 149, 237, 0.7); /* 默认发光效果 */
  transition: all 0.3s ease;
}

.nav-button .button-text {
  text-shadow: 0 0 8px rgba(153, 102, 255, 0.7); /* 紫色发光 */
}

/* 悬停时增强发光效果 */
.nav-button:hover .button-text {
  text-shadow:
      0 0 10px rgba(100, 149, 237, 0.9),
      0 0 20px rgba(100, 149, 237, 0.5);
}

.langs-container .nav-button:hover .button-text {
  text-shadow:
      0 0 10px rgba(75, 192, 192, 0.9),
      0 0 20px rgba(75, 192, 192, 0.5);
}

.frontendItems-container .nav-button:hover .button-text {
  text-shadow:
      0 0 10px rgba(153, 102, 255, 0.9),
      0 0 20px rgba(153, 102, 255, 0.5);
}

/* 深色模式下的发光效果增强 */
:root.dark {
  .button-text {
    text-shadow: 0 0 10px rgba(100, 149, 237, 0.9);
  }

  .items-container .nav-button .button-text {
    text-shadow: 0 0 10px rgba(100, 149, 237, 0.9);
  }

  .langs-container .nav-button .button-text {
    text-shadow: 0 0 10px rgba(75, 192, 192, 0.9);
  }

  .frontendItems-container .nav-button .button-text {
    text-shadow: 0 0 10px rgba(153, 102, 255, 0.9);
  }

  .nav-button:hover .button-text {
    text-shadow:
        0 0 15px rgba(100, 149, 237, 1),
        0 0 30px rgba(100, 149, 237, 0.7);
  }

  .langs-container .nav-button:hover .button-text {
    text-shadow:
        0 0 15px rgba(75, 192, 192, 1),
        0 0 30px rgba(75, 192, 192, 0.7);
  }

  .frontendItems-container .nav-button:hover .button-text {
    text-shadow:
        0 0 15px rgba(153, 102, 255, 1),
        0 0 30px rgba(153, 102, 255, 0.7);
  }
}

/* 为标题也添加发光效果 */
.section-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 1.5rem 0;
  color: var(--vp-c-text-1);
  display: flex;
  align-items: center;
  gap: 10px;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
}

.section-title:hover {
  text-shadow:
      0 0 15px rgba(255, 255, 255, 0.8),
      0 0 30px rgba(255, 255, 255, 0.3);
}

/* 深色模式下的标题发光效果 */
:root.dark .section-title {
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
}

:root.dark .section-title:hover {
  text-shadow:
      0 0 20px rgba(255, 255, 255, 1),
      0 0 40px rgba(255, 255, 255, 0.5);
}
</style>