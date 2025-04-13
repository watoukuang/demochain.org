<template>
  <a-card class="token pool-cfg-card">
    <template #title>
      <span class="title">配置</span>
    </template>
    <template #extra>
      <a-button plain @click="transfer" danger>转账</a-button>
    </template>
    <a-form ref="formRef">
      <a-row justify="space-between">
        <a-col :span="7">
          <a-form-item label="电脑A">
            <a-select v-model:value="aGpu" :options="computers" @change="() => handleChange('a')"/>
          </a-form-item>
        </a-col>
        <a-col :span="7">
          <a-form-item label="电脑B">
            <a-select v-model:value="bGpu" :options="computers" @change="() => handleChange('b')"/>
          </a-form-item>
        </a-col>
        <a-col :span="7">
          <a-form-item label="电脑C">
            <a-select v-model:value="cGpu" :options="computers" @change="() => handleChange('c')"/>
          </a-form-item>
        </a-col>
      </a-row>
      <a-form-item label="TX" class="tx">
        <div class="rows">
          <a-table
              bordered
              :columns="columns"
              :data-source="txs"
              :locale="locale"
              size="small"
              :pagination="false"
          />
        </div>
      </a-form-item>
    </a-form>
    <a-modal ref="xModal" v-model:open="open" title="开始转账" ok-text="确认" cancel-text="取消"
             width="400px" :closeIcon="true" zIndex="100" @ok="onSubmit" @cancel="cancel">
      <a-form :labelCol="{ span:5 }" :wrapperCol="{ span: 19 }" :model="formState">
        <a-form-item label="fm" name="fm" :rules="[{ required: true, message: 'please input from address!' }]">
          <a-input v-model:value="formState.fm" placeholder="please input from address!"/>
        </a-form-item>
        <a-form-item label="to" name="to" :rules="[{ required: true, message: 'please input to address!' }]">
          <a-input v-model:value="formState.to" placeholder="please input to address!"/>
        </a-form-item>
        <a-form-item label="amt" name="amt" :rules="[{ required: true, message: 'please input amount!' }]">
          <a-input-number addonAfter="Bells" v-model:value="formState.amt" style="width: 100%" min="0"
                          placeholder="please input amount!"/>
        </a-form-item>
      </a-form>
    </a-modal>
  </a-card>
</template>
<script lang="ts" setup>
import {reactive, ref} from "vue";
import {Tx} from "@/types/block";

const computers = [{
  value: '1',
  label: "4核GPU"
}, {
  value: '2',
  label: "8核GPU"
}, {
  value: '3',
  label: "16核GPU"
}]
const aGpu = ref('1');
const bGpu = ref('2');
const cGpu = ref('3');

const txs = reactive<Tx[]>([])
const locale = {emptyText: '暂无转账记录!'}
const reset = () => {
  aGpu.value = "1";
  bGpu.value = "2";
  cGpu.value = "3";
}

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

const open = ref(false)
/**
 * 转账
 */
const transfer = () => open.value = true;

const emit = defineEmits()
const handleChange = (machine: 'a' | 'b' | 'c') => {
  let gpu = '';
  if (machine === 'a') {
    gpu = aGpu.value;
  }
  if (machine === 'b') {
    gpu = bGpu.value;
  }
  if (machine === 'c') {
    gpu = cGpu.value;
  }
  emit("fetch-gpu", {machine: machine, gpu: gpu});
};
const formState = ref<Tx>({
  fm: "",
  to: "",
  amt: 0
})

/**
 * 确定转账
 */
const onSubmit = () => {
  txs.push(formState.value);
  emit("fetch-tx", txs);
  resetForm();
  open.value = false;
}

/**
 * 取消表单
 */
const cancel = () => (open.value = false, resetForm());

/**
 * 重置表单
 */
const resetForm = () => {
  formState.value = {fm: "", to: "", amt: 0}
}


defineExpose({
  reset
})
</script>

<style>
.token.pool-cfg-card {
  background: linear-gradient(135deg, #2a2c36, #172e1f);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  min-height: 370px;

  .title {
    font-size: 18px;
    color: #f14545;
  }

  .tx {
    margin-top: 10px;

    .rows {
      padding: 10px 15px;
      border: solid 1px #f1f1f1;

      .record {
        margin-bottom: 5px;
      }
    }
  }


  /* Set label color to yellow */
  .ant-form-item-label > label {
    color: #fab301 !important; /* Change label color to yellow */
  }

  .yellow-btn {
    border-color: #fab301;
    color: #fab301;
  }
}
</style>