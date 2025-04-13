<template>
  <a-card class="computer workflow-card">
    <template #title>
      <span style="font-size: 18px;color: #f14545;">电脑</span>
    </template>
    <a-list class="list">
      <a-list-item v-for="(item,index) in items" :key="index" class="list-item">
        <a-list-item-meta>
          <template #avatar>
            <span class="meta">{{ item.title }}</span>
          </template>
        </a-list-item-meta>
        <a-steps :items="item.steps" class="steps" :key="index"/>
      </a-list-item>
    </a-list>
  </a-card>
</template>
<script setup lang="ts">
import {defineProps} from "vue";

const {items} = defineProps<{ items: any[] }>();

</script>

<style>
.computer.workflow-card {
  min-height: 370px;
  background: linear-gradient(135deg, #2a2c36, #172e1f);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

  .list {
    border: solid 1px #fed60b;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3); /* 半透明白色 */


    .list-item {
      min-height: 87px;
    }

    .meta {
      font-weight: bold
    }

    .steps {
      width: 93%;
      padding: 15px 0;
       /* 步骤标题字体颜色为黄色 */
       .ant-steps-item-title {
        color: #fed60b !important;
      }
    }

  }
}


</style>