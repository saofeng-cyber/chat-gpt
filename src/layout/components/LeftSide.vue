<template>
  <n-layout-sider
    :position="isMobile ? 'absolute' : 'static'"
    bordered
    show-trigger
    collapse-mode="width"
    :collapsed-width="0"
    :width="260"
    :native-scrollbar="true"
  >
    <div class="flex flex-col h-full overflow-x-hidden transition-all">
      <div class="p-4">
        <n-button class="w-full" size="large" @click="addChat"> New Chat </n-button>
      </div>
      <div class="flex-1 pl-4 overflow-hidden">
        <ChatList />
      </div>
      <div class="p-4" style="border: 1px solid var(--n-border-color)">
        <n-space vertical>
          <n-button text @click="clearChat">
            <template #icon>
              <n-icon>
                <Delete24Filled />
              </n-icon>
            </template>
            Clear conversations
          </n-button>
          <n-button class="w-full">提示词商店</n-button>
        </n-space>
      </div>
    </div>
  </n-layout-sider>
</template>
<script lang="ts">
import ChatList from '@/components/ChatList.vue'
import { useBasicLayout } from '@/hooks/useBasieLayout'
import { ChatStore } from '@/stores/chatStore'
import { Delete24Filled } from '@vicons/fluent'
import { useDateFormat, useNow } from '@vueuse/core'
export default defineComponent({
  components: {
    ChatList,
    Delete24Filled
  },
  setup() {
    const { isMobile } = useBasicLayout()
    const useChatStore = ChatStore()
    return {
      isMobile,
      addChat() {
        const dateTime = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss', { locales: 'en-US' })
        useChatStore.ADDNEWCHAT({
          dateTime: dateTime.value,
          inversion: true,
          text: '新会话'
        })
      },
      clearChat() {
        useChatStore.CLEARLIST()
      }
    }
  }
})
</script>
