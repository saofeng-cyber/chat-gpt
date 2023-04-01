<template>
  <div class="w-full mb-6 overflow-hidden" :style="reverseStyle">
    <div class="flex" :class="[inversion ? 'flex-row' : 'flex-row-reverse']">
      <div class="msg">
        <p class="text-xs text-[#b4bbc4]" :class="[inversion ? 'text-right' : 'text-left']">
          {{ dateTime }}
        </p>
        <div
          class="p-2 text-black break-words rounded-md"
          :class="[inversion ? 'chatCloud' : 'gptCloud']"
          :style="textBgStyle"
          v-html="text"
        />
      </div>
      <div :class="[inversion ? 'ml-2' : 'mr-2']">
        <AvatarMsg :image="inversion" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import AvatarMsg from '@/components/AvatarMsg.vue'
import { CSSProperties } from 'vue'

interface Props {
  dateTime?: string
  text?: string
  inversion?: boolean
}
const props = defineProps<Props>()
const reverseStyle = computed((): CSSProperties => {
  return {
    display: 'flex',
    'flex-direction': props.inversion ? 'row-reverse' : 'row'
  }
})
const textBgStyle = computed((): CSSProperties => {
  return {
    'background-color': props.inversion ? '#d2f9d1' : '#f4d6cb'
  }
})
</script>
<style scoped lang="less">
.chatCloud {
  position: relative;
  &::after {
    content: '';
    top: 6px;
    right: -12px;
    position: absolute;
    border: 12px solid;
    border-radius: 16px;
    border-color: transparent transparent transparent #d2f9d1;
    transform: rotate(88deg);
  }
}
.gptCloud {
  position: relative;
  &::after {
    content: '';
    top: 6px;
    left: -12px;
    position: absolute;
    border: 12px solid;
    border-radius: 16px;
    border-color: transparent #f4d6cb transparent transparent;
    transform: rotate(-88deg);
  }
}
</style>
