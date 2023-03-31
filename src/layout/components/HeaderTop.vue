<template>
  <n-layout-header bordered
    ><div
      class="px-[var(--side-padding)] h-full items-center"
      style="
        display: grid;
        grid-template-rows: 63px;
        grid-template-columns: calc(272px - var(--side-padding)) 1fr auto;
      "
    >
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
      <div class="flex flex-row-reverse items-center gap-4">
        <n-text class="text-[1rem]">1.0.0</n-text>
        <n-icon size="24">
          <WeatherSunny24Filled />
        </n-icon>
      </div></div
  ></n-layout-header>
</template>
<script lang="ts">
import TopNav from './TopNav.vue'
import ChatSvg from '@/components/icons/ChatSvg.vue'
import { WeatherSunny24Filled } from '@vicons/fluent'
export default defineComponent({
  components: {
    TopNav,
    ChatSvg,
    WeatherSunny24Filled
  },
  setup() {}
})
</script>
