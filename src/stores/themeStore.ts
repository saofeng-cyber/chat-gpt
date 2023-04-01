import { GlobalThemeOverrides, darkTheme, lightTheme } from 'naive-ui'
import { BuiltInGlobalTheme } from 'naive-ui/es/themes/interface'
export const themeStore = defineStore('theme', () => {
  const themeOverrides = ref<GlobalThemeOverrides>()
  const theme = ref<BuiltInGlobalTheme>(lightTheme)
  const toggleTheme = (isDark: boolean) => {
    theme.value = isDark ? darkTheme : lightTheme
  }
  const changeThemeOverrides = (themeData: GlobalThemeOverrides) => {
    themeOverrides.value = themeData
  }
  return { theme, toggleTheme, themeOverrides, changeThemeOverrides }
})
