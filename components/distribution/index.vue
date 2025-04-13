<template>
  <div class="diste-container">
    <ClientOnly>
      <!-- 移动端上下布局，PC端左右布局 -->
      <a-row
        :gutter="[16, 16]"
        :wrap="true"
        class="workspace-row"
      >
        <a-col :xs="24" :md="9">
          <pool-cfg class="x-data" ref="poolCfg" @fetch-gpu="changeGpu" @fetch-data="changeData"/>
        </a-col>
        <a-col :xs="24" :md="15">
          <computer :items="board"/>
        </a-col>
      </a-row>
      <!-- 区块链展示区 -->
      <a-card class="blockchain-card">
        <template #title>
          <span class="card-title">公链</span>
        </template>
        <template #extra>
          <a-button plain @click="mine" :loading="loading" danger>⛏️ 挖矿</a-button>
          <span>&nbsp;&nbsp;</span>
          <a-button plain @click="reset">重置</a-button>
        </template>

        <a-list class="list">
          <a-list-item class="list-item" v-for="(label, i) in ['电脑A', '电脑B', '电脑C']" :key="i">
            <a-list-item-meta>
              <template #avatar>
                <span class="meta">{{ label }}</span>
              </template>
            </a-list-item-meta>
            <block-chain :blocks="blocks" :ref="`${label.toLowerCase()}BlockChain`"/>
          </a-list-item>
        </a-list>
      </a-card>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import BlockChain from './modules/block-chain.vue';
import PoolCfg from './modules/pool-cfg.vue';
import Computer from './modules/computer.vue';
import { Block } from '@/types/block';
import { reactive, ref, computed, onMounted } from "vue";
import CryptoJS from "crypto-js";
import { message, StepProps } from "ant-design-vue";

const loading = ref(false);
const data = ref("");
const aGpu = ref("1");
const bGpu = ref("2");
const cGpu = ref("3");

const isMobile = ref(false);
onMounted(() => {
  isMobile.value = window.innerWidth < 768;
});

const board = reactive([
  { title: '电脑A', steps: initSteps() },
  { title: '电脑B', steps: initSteps() },
  { title: '电脑C', steps: initSteps() }
]);

const blocks = reactive<Block[]>([
  {
    height: 1,
    nonce: 49691,
    data: '第一笔交易记录数据',
    previous: '0000000000000000000000000000000000000000000000000000000000000000',
    hash: '0000b61c8bb61a6faa7c46e4872623b6e4caac5a0ae3a3b416849b216d0d62f6'
  }
]);

const pattern = '0000';
const maxNonce = 500000;

function initSteps(): StepProps[] {
  return [
    { title: '开始', status: 'wait' },
    { title: '打包', status: 'wait' },
    { title: '计算', status: 'wait' },
    { title: '同步', status: 'wait' },
    { title: '结束', status: 'wait' }
  ];
}

const mine = async () => {
  loading.value = true;
  message.info("模拟挖矿开始运行......");
  await resetStep();
  const height = blocks.length + 1;
  try {
    await Promise.all([
      mineTask(0, aGpu.value, height),
      mineTask(1, bGpu.value, height),
      mineTask(2, cGpu.value, height)
    ]);
  } catch (error) {
    console.error("挖矿过程中出现错误:", error);
  } finally {
    loading.value = false;
    message.success("模拟挖矿结束......");
  }
};

const resetStep = async () => {
  board.forEach((computer, index) => {
    computer.steps = initSteps();
  });
};

const mineTask = async (index: number, gpu: string, height: number) => {
  const steps = board[index].steps;
  await delay(2000); steps[0].status = 'process';
  await delay(2000); steps[0].status = 'finish';

  await delay(2000); steps[1].status = 'process';
  const lastBlock = blocks[blocks.length - 1];
  let block = {
    height: lastBlock.height + 1,
    nonce: 0,
    data: data.value,
    previous: lastBlock.hash,
    hash: ''
  };
  await delay(2000); steps[1].status = 'finish';

  await delay(2000); steps[2].status = 'process';
  if (gpu === "1") await delay(9000);
  if (gpu === "2") await delay(6000);
  if (gpu === "3") await delay(3000);
  for (let nonce = 0; nonce < maxNonce; nonce++) {
    const input = `${block.height}${nonce}${block.data}`;
    const hash = CryptoJS.SHA256(input).toString();
    if (hash.startsWith(pattern)) {
      block.nonce = nonce;
      block.hash = hash;
      break;
    }
  }
  await delay(2000); steps[2].status = 'finish';

  await delay(2000); steps[3].status = 'process';
  if (blocks.length === height) {
    steps[3].status = 'error';
    return false;
  } else {
    blocks.push(block);
    steps[3].status = 'finish';
    await delay(2000); steps[4].status = 'finish';
    return true;
  }
};

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const changeGpu = ({ machine, gpu }: any) => {
  if (machine === 'a') aGpu.value = gpu;
  if (machine === 'b') bGpu.value = gpu;
  if (machine === 'c') cGpu.value = gpu;
};

const changeData = (val: string) => data.value = val;

const poolCfg = ref();
const reset = () => {
  blocks.splice(0, blocks.length, {
    height: 1,
    nonce: 49691,
    data: '第一笔交易记录数据',
    previous: '0000000000000000000000000000000000000000000000000000000000000000',
    hash: '0000b61c8bb61a6faa7c46e4872623b6e4caac5a0ae3a3b416849b216d0d62f6'
  });
  poolCfg.value.reset();
  resetStep();
};
</script>

<style scoped>
.diste-container {
  margin: auto;
  padding: 16px;
  max-width: 1540px;
}
.workspace-row {
  margin-top: 40px;
}
.blockchain-card {
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  background: linear-gradient(135deg, #2a2c36, #172e1f);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}
.card-title {
  font-size: 18px;
  color: #f14545;
}
.list {
  border: 1px solid #fed60b;
  border-radius: 5px;
}
.meta {
  color: #00b300;
  font-weight: bold;
}
</style>
