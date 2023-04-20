import { ss } from '../../utils/storage/index'
const LOCAL_NAME = 'appSetting'
export type Theme = 'light' | 'dark'

export type Language = 'zh-CN' | 'en-US'
export interface AppState {
  siderCollapsed: boolean
  theme: Theme
  language: Language
  version: string
}

export const GET_DEFAULT_SETTING = (): AppState => {
  return {
    siderCollapsed: false,
    theme: 'light',
    language: 'zh-CN',
    version: '1.0.1'
  }
}

export const GET_LOCAL_SETTING = (): AppState => {
  return ss.getItem(LOCAL_NAME) || GET_DEFAULT_SETTING()
}
export const SET_LOCAL_SETTING = (setting: AppState): void => {
  return ss.setItem(LOCAL_NAME, setting)
}
export const RESET_LOCAL_SETTING = (): void => {
  return ss.setItem(LOCAL_NAME, GET_DEFAULT_SETTING())
}
