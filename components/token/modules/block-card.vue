<template>
  <a-card class="token block-card-container">
    <template #title>
      <span style="font-size: 18px;color: #fab301">区块</span>
    </template>
    <a-form :labelCol="{ span: 4 }" :wrapperCol="{ span: 20 }" class="r-form">
      <a-form-item label="高度">
        <a-input-number v-model:value="block.height" style="width: 100%" min="1">
          <template #addonBefore>
            <span>#</span>
          </template>
        </a-input-number>
      </a-form-item>
      <a-form-item label="随机数">
        <a-input-number v-model:value="block.nonce" min="1" max="500000" style="width: 100%"/>
      </a-form-item>
      <a-form-item label="TX" class="tx">
        <div class="rows">
          <a-table
              bordered
              :columns="columns"
              :data-source="block.txs"
              :locale="locale"
              size="small"
              :pagination="false"
          />
        </div>
      </a-form-item>
      <a-form-item label="前指针">
        <a-textarea :row="2" disabled v-model:value="block.previous" style="font-size: 12px"/>
      </a-form-item>
      <a-form-item label="哈希">
        <a-textarea :row="2" disabled v-model:value="block.hash" style="font-size: 12px"/>
      </a-form-item>
    </a-form>
  </a-card>
</template>
<script lang="ts" setup>
import {defineProps} from "vue";
import {TxBlock} from "@/types/block";

const locale = {emptyText: '暂无转账记录!'}
const {block} = defineProps<{ block: TxBlock }>();
const columns = [
  {
    title: 'fm',
    dataIndex: 'fm',
    key: 'fm',
  },
  {
    title: 'to',
    dataIndex: 'to',
    key: 'to',
  },
  {
    title: 'amt',
    dataIndex: 'amt',
    key: 'amt',
  },
];
</script>
<style>
.token.block-card-container {
  min-width: 450px;

  .tx {
    .rows {
      padding: 10px 5px;
      border: solid 1px #f1f1f1;
    }
  }

}
</style>