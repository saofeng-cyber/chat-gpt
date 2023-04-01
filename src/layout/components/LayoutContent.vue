router-view
<template>
  <n-layout-content>
    <main class="flex flex-col h-full">
      <n-scrollbar>
        <div class="p-4 content">
          <router-view v-slot="{ Component }">
            <template v-if="Component">
              <Transition name="slide-fade" appear mode="out-in">
                <component :is="Component" />
              </Transition>
            </template>
            <template v-else>
              <n-result status="404" title="404 资源不存在" description="生活总归带点荒谬">
                <template #footer>
                  <n-button>找点乐子吧</n-button>
                </template>
              </n-result>
            </template>
          </router-view>
          <n-back-top :bottom="60" listen-to="content" :visibility-height="180"></n-back-top>
        </div>
      </n-scrollbar>
      <n-message-provider placement="top">
        <FooterAction />
      </n-message-provider>
    </main>
  </n-layout-content>
</template>
<script lang="ts">
import FooterAction from '@/components/FooterAction.vue'
import { PaperPlane } from '@vicons/ionicons5'

export default defineComponent({
  components: {
    FooterAction,
    PaperPlane
  },
  setup() {
    return {}
  }
})
</script>
<style scoped lang="less">
/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(30px);
  opacity: 0;
}
</style>
