<script setup lang="ts">
import General from '@/components/setting/General.vue'
import { Settings } from '@vicons/ionicons5'
import { userStore } from '@/stores/user/userStore'
const user = userStore()
const { userInfo } = storeToRefs(user)
const generalRef = ref()
const openModal = () => {
  generalRef.value.showModal = true
}
</script>
<template>
  <div class="flex items-center">
    <div class="flex items-center flex-1 content">
      <n-avatar round :size="36" :src="userInfo.avatar" />
      <div class="pl-3">
        <h2 class="m-0 text-sm">{{ userInfo.userName }}</h2>
        <p class="m-0 text-xs" v-html="userInfo.description"></p>
      </div>
    </div>
    <n-button circle @click="openModal">
      <template #icon>
        <n-icon><Settings /></n-icon>
      </template>
    </n-button>
    <General ref="generalRef" />
  </div>
</template>
