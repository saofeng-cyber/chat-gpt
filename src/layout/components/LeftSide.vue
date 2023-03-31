<template>
  <n-layout-sider
    bordered
    show-trigger
    collapse-mode="width"
    :collapsed-width="0"
    :width="240"
    :native-scrollbar="true"
  >
    <div class="flex flex-col h-full">
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
import { ChatStore } from '@/stores/chatStore'
import { Delete24Filled } from '@vicons/fluent'
export default defineComponent({
  components: {
    ChatList,
    Delete24Filled
  },
  setup() {
    const useChatStore = ChatStore()
    return {
      addChat() {
        useChatStore.ADDNEWCHAT(new Date().toLocaleString())
      },
      clearChat() {
        useChatStore.CLEARLIST()
      }
    }
  }
})
</script>
