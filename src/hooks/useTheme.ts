import { themeStore } from '@/stores/themeStore'
export const useTheme = () => {
  const useThemeStore = themeStore()
  const toggleTheme = (isDark: boolean) => {
    useThemeStore.toggleTheme(isDark)
  }

  return {
    toggleTheme
  }
}
