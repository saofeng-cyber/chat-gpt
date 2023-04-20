import { appStore } from '@/stores/app/appStore'
import { Theme } from '@/stores/app/helper'
import { darkTheme, lightTheme } from 'naive-ui'

export const useTheme = () => {
  const useAppStore = appStore()
  const theme = computed(() => useAppStore.theme === 'dark')
  const globaltheme = computed(() => (theme.value ? darkTheme : lightTheme))

  const toogleTheme = (isDark: boolean) => {
    const theme: Theme = isDark ? 'dark' : 'light'
    useAppStore.setTheme(theme)
  }

  return {
    theme,
    globaltheme,
    toogleTheme
  }
}
