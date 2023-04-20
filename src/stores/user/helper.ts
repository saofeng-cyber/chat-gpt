import { ss } from '@/utils/storage'
const LOCAL_NAME = 'userStorage'
export interface UserInfoMation {
  userName: string
  avatar: string
  description: string
}

export interface UserState {
  userInfo: UserInfoMation
}
export function GET_DEFAULT_SETTING(): UserState {
  return {
    userInfo: {
      avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=942391953&spec=640&img_type=jpg',
      userName: 'SaoFeng',
      description:
        'Star on <a href="https://github.com/saofeng-cyber/chat-gpt" class="text-blue-500" target="_blank" >Github</a>'
    }
  }
}
export function GET_LOCAL_SETTING(): UserState {
  return ss.getItem(LOCAL_NAME) || GET_DEFAULT_SETTING()
}

export function SET_LOCAL_SETTING(userState: UserState) {
  ss.setItem(LOCAL_NAME, userState)
}
export const RESET_LOCAL_SETTING = () => {
  ss.setItem(LOCAL_NAME, GET_DEFAULT_SETTING())
}
