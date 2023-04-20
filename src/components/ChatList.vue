<template>
  <n-scrollbar>
    <div v-for="(item, index) in CHATLIST" :key="index" class="px-4 mb-4">
      {{ item }}
    </div>
  </n-scrollbar>
</template>
<script lang="ts">
import { ChatStore } from '@/stores/chatStore'

export default defineComponent({
  setup() {
    const useChatStore = ChatStore()
    const { CHATLIST } = storeToRefs(useChatStore)
    return {
      CHATLIST
    }
  }
})
</script>
