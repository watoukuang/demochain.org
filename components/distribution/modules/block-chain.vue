<template>
  <div class="diste blockchain-container">
    <block-card
        v-for="block in blocks"
        :key="block.height"
        :block="block"
        class="block-card"
    />
  </div>
</template>
<script setup lang="ts">
import BlockCard from "./block-card.vue";
import {defineProps} from "vue";
import {Block} from "@/types/block";

const {blocks} = defineProps<{ blocks: Block[] }>();

</script>
<style>
.diste.blockchain-container {
  width: 95%;
  display: flex;
  background: rgba(255, 255, 255, 0.3); /* 半透明白色 */
  overflow-x: auto;
  scroll-snap-type: x mandatory; /* 启用滚动捕捉效果，可选 */

  .block-card {
    margin: 10px;
  }

  .green-btn {
    border-color: #00b300;
    color: #00b300;
  }
}
</style>
