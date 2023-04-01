<script setup lang="ts">
import { ChatMultiple20Regular } from '@vicons/fluent'
import MessagePage from './MessagePage.vue'
import { useChat } from '@/hooks/useChat'
const dataSource = useChat().chatList
</script>

<template>
  <div class="px-2 py-1">
    <template v-if="dataSource.length > 0">
      <MessagePage
        v-for="(item, index) in dataSource"
        :key="index"
        :date-time="item.dateTime"
        :inversion="item.inversion"
        :text="item.text"
      />
    </template>
    <n-empty v-else description="暂无对话内容">
      <template #icon>
        <n-icon>
          <ChatMultiple20Regular />
        </n-icon>
      </template>
      <template #extra> </template>
    </n-empty>
  </div>
</template>
