<template>
  <div class="development-project">
    <h1>{{ title }}</h1>
    <p>{{ `鼠标X位置： ${x}, 鼠标Y位置：${y}` }}</p>
  </div>
</template>
<script setup lang="ts">
import { defineComponent } from 'vue'
import { useMouse } from '@vueuse/core'
const title = '开发项目'
const { x, y } = useMouse()
defineComponent({
  name: 'DevelopmentProject',
  setup() {
    return { title }
  }
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
