<template>
  <n-layout-content content-style="padding: 24px;">
    <n-empty description="是一个飞机">
      <template #icon>
        <n-icon>
          <DocumentOnePage20Filled />
        </n-icon>
      </template>
      <template #extra>
        <n-button size="small"> 暂无会话记录 </n-button>
      </template>
    </n-empty>
  </n-layout-content>
</template>
<script lang="ts">
import { DocumentOnePage20Filled } from '@vicons/fluent'
export default defineComponent({
  components: {
    DocumentOnePage20Filled
  }
})
</script>
