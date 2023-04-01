<template>
  <n-space>
    <n-tag v-for="(item, index) in models" :key="index">
      {{ item.id }}
    </n-tag>
  </n-space>
</template>
<script lang="ts">
import { listModels } from '@/config'

export default defineComponent({
  setup() {
    const models = ref()
    const getModels = async () => {
      const list = await listModels()
      console.log(list)
      models.value = list.data.data
    }
    onMounted(() => {
      getModels()
    })
    return {
      getModels,
      models
    }
  }
})
</script>
