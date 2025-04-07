<script setup>
import {ref,defineAsyncComponent} from 'vue'
import Contact from "./Contact.vue";
const SearchOutlined = defineAsyncComponent(() => import('@ant-design/icons-vue').then(m => m.SearchOutlined))
const items = ref([
  {
    id: 1,
    text: 'POE',
    url: 'https://poe.com/'
  },
  {
    id: 2,
    text: 'DeepSeek',
    url: 'https://deepseek.com/'
  },
  {
    id: 3,
    text: 'GitHub',
    url: 'https://github.com/'
  },
  {
    id: 4,
    text: 'MindMap',
    url: 'https://wanglin2.github.io/mind-map/#/'
  },
  {
    id: 5,
    text: 'GetEmoji',
    url: 'https://getemoji.com/'
  }
])

const frontendItems = ref([
  {
    id: 1,
    text: 'ElementPlus',
    url: 'https://element-plus.org/'
  },
  {
    id: 2,
    text: 'TypeScript',
    url: 'https://www.typescriptlang.org/'
  },
  {
    id: 3,
    text: 'Vite',
    url: 'https://vitejs.dev/'
  },
  {
    id: 4,
    text: 'Webpack',
    url: 'https://webpack.js.org/'
  }
])

const langs = ref([
  {
    id: 1,
    text: 'JAVA',
    url: 'https://element-plus.org/'
  },
  {
    id: 2,
    text: 'Golang',
    url: 'https://www.typescriptlang.org/'
  },
  {
    id: 3,
    text: 'Rust',
    url: 'https://vitejs.dev/'
  },
  {
    id: 4,
    text: 'JavaScript',
    url: 'https://webpack.js.org/'
  },
  {
    id: 5,
    text: 'SQL',
    url: 'https://webpack.js.org/'
  },
  {
    id: 5,
    text: 'SHELL',
    url: 'https://webpack.js.org/'
  },
  {
    id: 6,
    text: 'Python',
    url: 'https://webpack.js.org/'
  }
])

const searchQuery = ref('')
const searchEngine = ref('google')

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    let searchUrl = ''
    const encodedQuery = encodeURIComponent(searchQuery.value)
    switch (searchEngine.value) {
      case 'bing':
        searchUrl = `https://www.bing.com/search?q=${encodedQuery}`
        break
      case 'baidu':
        searchUrl = `https://www.baidu.com/s?wd=${encodedQuery}`
        break
      default:
        searchUrl = `https://www.google.com/search?q=${encodedQuery}`
    }
    window.open(searchUrl, '_blank')
  }
}

const navigateTo = (url) => window.open(url, '_blank');
</script>

<template>
  <div class="nav-container">
    <ClientOnly>
      <!-- 背景粒子效果 -->
      <div class="particles-background"/>
      <!-- 搜索区域 -->
      <div class="search-section">
        <div class="search-card">
          <div class="search-wrapper">
            <a-select
                v-model:value="searchEngine"
                class="engine-selector"
                size="large"
            >
              <a-select-option value="google">
                <span class="search-option">
                  <img src="https://www.google.com/favicon.ico" class="search-engine-icon" alt="Google">
                  Google
                </span>
              </a-select-option>
              <a-select-option value="bing">
                <span class="search-option">
                  <img src="https://www.bing.com/favicon.ico" class="search-engine-icon" alt="Bing">
                  Bing
                </span>
              </a-select-option>
              <a-select-option value="baidu">
                <span class="search-option">
                  <img src="https://www.baidu.com/favicon.ico" class="search-engine-icon" alt="Baidu">
                  百度
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
                <SearchOutlined class="search-input-icon"/>
              </template>
            </a-input>
          </div>
        </div>
      </div>

      <!-- 常用工具区域 -->
      <div class="section-container">
        <h3 class="section-title">
          <span class="section-icon">🚀</span>
          <span>常用工具</span>
        </h3>
        <div class="button-grid">
          <a-button
              v-for="item in items"
              :key="item.id"
              class="nav-button"
              @click="navigateTo(item.url)"
          >
            <div class="button-content">
              <span class="button-text">{{ item.text }}</span>
            </div>
          </a-button>
        </div>
      </div>

      <!-- 编程语法 -->
      <div class="section-container">
        <h3 class="section-title">
          <span class="section-icon">💻</span>
          <span>编程语法</span>
        </h3>
        <div class="button-grid">
          <a-button
              v-for="item in langs"
              :key="item.id"
              class="nav-button"
              @click="navigateTo(item.url)"
          >
            <div class="button-content">
              <span class="button-text">{{ item.text }}</span>
            </div>
          </a-button>
        </div>
      </div>

      <!-- 前端网址区域 -->
      <div class="section-container">
        <h3 class="section-title">
          <span class="section-icon">🛠️</span>
          <span>前端资源</span>
        </h3>
        <div class="button-grid">
          <a-button
              v-for="item in frontendItems"
              :key="item.id"
              class="nav-button"
              @click="navigateTo(item.url)"
          >
            <div class="button-content">
              <span class="button-text">{{ item.text }}</span>
            </div>
          </a-button>
        </div>
      </div>
    </ClientOnly>
    <Contact/>
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

/* 搜索区域样式 */
.search-section {
  margin-bottom: 3rem;
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
  background: linear-gradient(to right, red, orange); /* 红色到橙色渐变 */
  -webkit-background-clip: text; /* 仅应用于文本 */
  color: transparent; /* 使文本颜色透明以显示渐变 */}

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

/* 分区容器样式 */
.section-container {
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
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