<template>
  <n-menu
    v-model:value="activeKey"
    mode="horizontal"
    :options="menuTopOptions"
    @update:value="handleUpdateValue"
  />
</template>

<script lang="ts">
import { MenuOption, NIcon } from 'naive-ui'
import { BookOpen, Github } from '@vicons/fa'

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const activeKey = ref<string>('book')

const menuTopOptions: MenuOption[] = [
  {
    label: '文档说明',
    key: 'book',
    icon: renderIcon(BookOpen)
  },
  {
    label: 'Github',
    key: 'github',
    icon: renderIcon(Github)
  },
  {
    label: '烟火尘埃',
    key: 'smoke-the-fire-dust',
    icon: renderIcon(BookOpen)
  }
]
export default defineComponent({
  setup() {
    const notification = useNotification()
    return {
      activeKey,
      menuTopOptions,
      handleUpdateValue(key: string) {
        activeKey.value = key
        notification['success']({
          content: key,
          meta: '想不出来',
          duration: 2500,
          keepAliveOnHover: true
        })
      }
    }
  }
})
</script>
