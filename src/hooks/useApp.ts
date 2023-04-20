import { appStore } from '@/stores/app/appStore'
import { Language } from '@/stores/app/helper'
export const useApp = () => {
  const useAppStore = appStore()
  const setVersion = (version: string) => {
    useAppStore.setVersion(version)
  }

  const setSiderCollapsed = (collapsed: boolean) => {
    useAppStore.setSiderCollapsed(collapsed)
  }

  const setLanguage = (language: Language) => {
    useAppStore.setLanguage(language)
  }

  const setGptSdk = (sdk: string) => {
    useAppStore.setGptSdk(sdk)
  }

  return {
    setVersion,
    setSiderCollapsed,
    setLanguage,
    setGptSdk
  }
}
