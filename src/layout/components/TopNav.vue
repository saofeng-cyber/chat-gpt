<template>
  <div v-if="isMobile">
    <n-popover placement="bottom" trigger="click" @update:show="handleUpdateShow">
      <template #trigger>
        <n-button text style="font-size: 24px">
          <n-icon>
            <MenuSharp />
          </n-icon>
        </n-button>
      </template>
      <n-menu
        v-model:value="activeKey"
        mode="vertical"
        :options="menuTopOptions"
        @update:value="handleUpdateValue"
      />
    </n-popover>
  </div>
  <div v-else>
    <n-menu
      v-model:value="activeKey"
      mode="horizontal"
      :options="menuTopOptions"
      @update:value="handleUpdateValue"
    />
  </div>
</template>

<script lang="ts">
import { MenuOption, NIcon } from 'naive-ui'
import { Github } from '@vicons/fa'
import { useBasicLayout } from '@/hooks/useBasieLayout'
import { MenuSharp, Chatbubbles } from '@vicons/ionicons5'
import { TaskListLtr24Regular } from '@vicons/fluent'
import { useRouter, useRoute } from 'vue-router'

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const activeKey = ref<string>('')

const menuTopOptions: MenuOption[] = [
  {
    label: '聊天',
    key: 'chat',
    icon: renderIcon(Chatbubbles)
  },
  {
    label: 'Github',
    key: 'github',
    icon: renderIcon(Github)
  },
  {
    label: 'GptModels',
    key: 'listModels',
    icon: renderIcon(TaskListLtr24Regular)
  }
]
export default defineComponent({
  components: {
    MenuSharp
  },
  setup() {
    const { isMobile } = useBasicLayout()
    const UseRouter = useRouter()
    const UseRoute = useRoute()
    watch(
      () => UseRoute.name,
      () => {
        activeKey.value = UseRoute.name as string
      },
      { immediate: true }
    )
    return {
      activeKey,
      menuTopOptions,
      isMobile,
      handleUpdateShow(show: boolean) {
        console.log(show)
      },
      handleUpdateValue(key: string) {
        activeKey.value = key
        UseRouter.push({
          name: key
        })
      }
    }
  }
})
</script>
<style scoped lang="less"></style>
