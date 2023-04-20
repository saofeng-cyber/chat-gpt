import {
  UserState,
  GET_LOCAL_SETTING,
  SET_LOCAL_SETTING,
  UserInfoMation,
  RESET_LOCAL_SETTING,
  GET_DEFAULT_SETTING
} from './helper'

export const userStore = defineStore('userStore', {
  state: (): UserState => GET_LOCAL_SETTING(),
  actions: {
    updateUserInfo(userInfo: UserInfoMation) {
      this.userInfo = userInfo
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
