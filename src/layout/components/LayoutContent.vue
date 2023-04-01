<template>
  <n-layout-content>
    <main class="flex flex-col h-full">
      <n-scrollbar>
        <div class="p-4 content">
          <div class="h-[1200px]"></div>
          <n-back-top :bottom="100" listen-to="content" :visibility-height="180"></n-back-top>
        </div>
      </n-scrollbar>
      <!-- <n-empty description="是一个飞机" class="flex-1">
        <template #icon>
          <n-icon>
            <PaperPlane />
          </n-icon>
        </template>
        <template #extra>
          <n-button size="small"> 暂无会话记录 </n-button>
        </template>
      </n-empty> -->
      <footer class="p-4 shadow">
        <div style="display: grid; grid-template-columns: auto 1fr auto">
          <div class="flex items-center gap-4">
            <n-button text style="font-size: 24px">
              <n-icon>
                <Delete20Regular />
              </n-icon>
            </n-button>
            <n-button text style="font-size: 24px">
              <n-icon>
                <CloudDownloadOutline />
              </n-icon>
            </n-button>
            <n-button text style="font-size: 24px">
              <n-icon>
                <ChatboxEllipsesOutline />
              </n-icon>
            </n-button>
          </div>

          <div class="px-4">
            <n-input v-model:value="prompt" type="text" placeholder="来说点什么嘛" />
          </div>
          <n-button type="primary" style="font-size: 24px">
            <template #icon>
              <n-icon>
                <PaperPlane />
              </n-icon>
            </template>
          </n-button>
        </div>
      </footer>
    </main>
  </n-layout-content>
</template>
<script lang="ts">
import { PaperPlane, CloudDownloadOutline, ChatboxEllipsesOutline } from '@vicons/ionicons5'
import { Delete20Regular } from '@vicons/fluent'
export default defineComponent({
  components: {
    PaperPlane,
    Delete20Regular,
    CloudDownloadOutline,
    ChatboxEllipsesOutline
  },
  setup() {
    return {
      prompt: ref<string>()
    }
  }
})
</script>
