<template>
  <DefaultTheme.Layout>
    <template #layout-top>
      <MouseFollower />
      <MouseClick />
    </template>
  </DefaultTheme.Layout>
</template>
<script lang="ts" setup>
import MouseClick from "./MouseClick.vue";
import MouseFollower from "./MouseFollower.vue";
</script>