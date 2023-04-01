<template>
  <div class="h-full transition-all">
    <n-layout class="h-full">
      <HeaderTop />
      <n-layout has-sider style="height: calc(100% - var(--header-height))">
        <LeftSide />
        <LayoutContent />
      </n-layout>
    </n-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useBasicLayout } from '@/hooks/useBasieLayout'
import HeaderTop from './components/HeaderTop.vue'
import LeftSide from './components/LeftSide.vue'
import LayoutContent from './components/LayoutContent.vue'

export default defineComponent({
  components: {
    HeaderTop,
    LeftSide,
    LayoutContent
  },
  setup() {
    const { isMobile } = useBasicLayout()
    return {
      inverted: ref(false),
      isMobile
    }
  }
})
</script>
