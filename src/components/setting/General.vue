<script setup lang="ts">
import { BoxSearch24Filled, TextGrammarSettings24Filled } from '@vicons/fluent'
import { CSSProperties } from 'vue'
import GeneralCell from '@/components/setting/GeneralCell.vue'

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
        “威尔！着火了！快来帮忙！”我听到女朋友大喊。现在一个难题在我面前——是恢复一个重要的 Amazon
        服务，还是救公寓的火。<br /><br />
        我的脑海中忽然出现了 Amazon
        著名的领导力准则”客户至上“，有很多的客户还依赖我们的服务，我不能让他们失望！所以着火也不管了，女朋友喊我也无所谓，我开始
        debug 这个线上问题。
      </n-tab-pane>
    </n-tabs>
  </NModal>
</template>
