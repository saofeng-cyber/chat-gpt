<script setup lang="ts">
import { Save24Filled } from '@vicons/fluent'
import { appStore } from '@/stores/app/appStore'
const ms = useMessage()
const useAppStore = appStore()
const gptSdk = computed(() => useAppStore.sdk)
const saveGptSdk = () => {
  useAppStore.setGptSdk(gptSdk.value)
  ms.success('保存成功')
}
</script>
<template>
  <n-space vertical :size="18">
    <div class="flex items-center justify-between mx-2">
      <div class="w-[100px]">
        <n-text>gpt-sdk</n-text>
      </div>
      <div class="flex-1 mr-4">
        <n-input
          type="password"
          v-model:value="gptSdk"
          placeholder="请输入您的sdk，如果不会，请联系作者WX: saofeng521"
        />
      </div>
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-button text @click="saveGptSdk">
            <template #icon>
              <n-icon><Save24Filled /></n-icon>
            </template>
          </n-button>
        </template>
        保存配置
      </n-tooltip>
    </div>
  </n-space>
</template>
