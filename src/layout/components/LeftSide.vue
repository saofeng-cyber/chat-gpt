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
      <div class="flex-1 mb-2 overflow-hidden">
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
          <n-button class="w-full" @click="show()">提示词商店</n-button>
          <UserInfo />
        </n-space>
      </div>
    </div>
  </n-layout-sider>
</template>
<script setup lang="ts">
import ChatList from '@/components/ChatList.vue'
import UserInfo from '@/components/UserInfo.vue'
import { useBasicLayout } from '@/hooks/useBasieLayout'
import { ChatStore } from '@/stores/chatStore'
import { Delete24Filled } from '@vicons/fluent'
import { useDateFormat, useNow, useWebNotification } from '@vueuse/core'
import type { UseWebNotificationOptions } from '@vueuse/core'
const { isMobile } = useBasicLayout()
const useChatStore = ChatStore()
const options: UseWebNotificationOptions = {
  title: 'Hello, world from VueUse!',
  dir: 'auto',
  lang: 'en',
  renotify: true,
  tag: 'test'
}
const { show } = useWebNotification(options)
const addChat = () => {
  const dateTime = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss', { locales: 'en-US' })
  useChatStore.ADDNEWCHAT({
    dateTime: dateTime.value,
    inversion: true,
    text: '新会话'
  })
}
const clearChat = () => {
  useChatStore.CLEARLIST()
}
</script>
