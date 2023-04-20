import {
  AppState,
  GET_DEFAULT_SETTING,
  GET_LOCAL_SETTING,
  Language,
  RESET_LOCAL_SETTING,
  SET_LOCAL_SETTING,
  Theme
} from './helper'

export const appStore = defineStore('app-store', {
  state: (): AppState => GET_LOCAL_SETTING(),
  actions: {
    setVersion(version: string) {
      this.version = version
    },
    setSiderCollapsed(collapsed: boolean) {
      this.siderCollapsed = collapsed
      this.recordState()
    },
    setTheme(theme: Theme) {
      this.theme = theme
      this.recordState()
    },
    setLanguage(language: Language) {
      this.language = language
      this.recordState()
    },
    setGptSdk(sdk: string) {
      this.sdk = sdk
      this.recordState()
    },
    recordState() {
      SET_LOCAL_SETTING(this.$state)
    },
    resetState() {
      this.$state = GET_DEFAULT_SETTING()
      RESET_LOCAL_SETTING()
    }
  }
})
