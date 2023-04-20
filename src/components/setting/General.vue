<script setup lang="ts">
import { BoxSearch24Filled, TextGrammarSettings24Filled } from '@vicons/fluent'
import { CSSProperties } from 'vue'
import GeneralCell from '@/components/setting/GeneralCell.vue'
import GeneralSdk from './GeneralSdk.vue'

const showModal = ref<boolean>(false)

defineExpose({
  showModal
})

const moadlStyle = computed((): CSSProperties => {
  return {
    maxWidth: '640px',
    width: '90%'
  }
})
</script>
<template>
  <NModal
    v-model:show="showModal"
    :mask-closable="true"
    :auto-focus="false"
    preset="card"
    size="huge"
    :bordered="false"
    :style="moadlStyle"
    title="配置项"
  >
    <n-tabs type="segment" default-value="overview" animated>
      <n-tab-pane name="overview" tab="总览">
        <template #tab>
          <n-icon size="24">
            <BoxSearch24Filled />
          </n-icon>
          <span class="ml-2">总览</span>
        </template>
        <n-message-provider>
          <GeneralCell />
        </n-message-provider>
      </n-tab-pane>
      <n-tab-pane name="dispose" tab="配置">
        <template #tab>
          <n-icon size="24">
            <TextGrammarSettings24Filled />
          </n-icon>
          <span class="ml-2">配置</span>
        </template>
        <n-message-provider>
          <GeneralSdk />
        </n-message-provider>
      </n-tab-pane>
    </n-tabs>
  </NModal>
</template>
