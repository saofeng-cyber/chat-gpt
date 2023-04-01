<script setup lang="ts">
import MessagePage from './MessagePage.vue'
import { useChat } from '@/hooks/useChat'
const dataSource = useChat().chatList
</script>

<template>
  <div class="px-2 py-1">
    <MessagePage
      v-for="(item, index) in dataSource"
      :key="index"
      :date-time="item.dateTime"
      :inversion="item.inversion"
      :text="item.text"
    />
  </div>
</template>
