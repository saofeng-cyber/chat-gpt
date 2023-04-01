import { ChatStore } from '@/stores/chatStore'

export const useChat = () => {
  const useChatStore = ChatStore()
  const chatList = computed(() => useChatStore.CHATLIST)
  function addChat(chat: chat.ChatMsg) {
    useChatStore.ADDNEWCHAT(chat)
  }
  return {
    chatList,
    addChat
  }
}
