<template>
  <n-layout-header bordered
    ><div class="px-[var(--side-padding)] h-full items-center" :style="headTopStyle">
      <div class="n-text cursor-pointer text-[18px] flex items-center gap-2">
        <n-icon size="32">
          <ChatSvg />
        </n-icon>
        <span class="text-[16px]">My Gpt</span>
      </div>
      <div class="pl-[var(--side-padding)]">
        <n-notification-provider>
          <TopNav />
        </n-notification-provider>
      </div>
    </div>
  </n-layout-header>
</template>
<script lang="ts">
import TopNav from './TopNav.vue'
import ChatSvg from '@/components/icons/ChatSvg.vue'
import { useBasicLayout } from '@/hooks/useBasieLayout'
import { CSSProperties } from 'vue'
export default defineComponent({
  components: {
    TopNav,
    ChatSvg
  },
  setup() {
    const { isMobile } = useBasicLayout()
    const headTopStyle = computed((): CSSProperties => {
      return {
        display: 'grid',
        'grid-template-rows': '63px',
        'grid-template-columns': isMobile.value
          ? '1fr auto'
          : 'calc(272px - var(--side-padding)) 1fr auto'
      }
    })
    return {
      isMobile,
      headTopStyle
    }
  }
})
</script>
<style scoped lang="less">
.header-top-no {
  display: grid;
  grid-template-rows: 63px;
  grid-template-columns: calc(272px - var(--side-padding)) 1fr auto;
}
.header-top {
  display: flex;
  height: calc(var(--header-height) - 1px);
  justify-content: space-between;
}
</style>
