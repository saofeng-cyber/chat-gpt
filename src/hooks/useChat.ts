import { ChatStore } from '@/stores/chatStore'

export const useChat = () => {
  const useChatStore = ChatStore()
  const { CHATLIST: chatList } = storeToRefs(useChatStore)
  function addChat(chat: chat.ChatMsg) {
    useChatStore.ADDNEWCHAT(chat)
  }
  return {
    chatList,
    addChat
  }
}
