<template>
  <div class="development-project">
    <h1>{{ title }}</h1>
    <p>
      <n-text>
        {{ `鼠标X位置： ${x}, 鼠标Y位置：${y}` }}
      </n-text>
    </p>
    <n-space>
      <n-input v-model:value="speakMsg" type="text"></n-input>
      <n-button @click="speak">{{ isPlaying ? '停止' : '播放' }}</n-button>
    </n-space>
  </div>
</template>
<script setup lang="ts">
import { useMouse, useSpeechSynthesis } from '@vueuse/core'
const title = '开发项目'
const speakMsg = ref('hello world')
const { x, y } = useMouse()
const { isPlaying, speak } = useSpeechSynthesis(speakMsg, {
  lang: 'zh-CN',
  pitch: 1,
  rate: 1,
  volume: 1
})
</script>
<style scoped lang="less">
.development-project h1 {
  font-size: 2rem;
  color: #f57c00;
}

.development-project p {
  font-size: 1rem;
  color: #424242;
  line-height: 1.5;
}
</style>
