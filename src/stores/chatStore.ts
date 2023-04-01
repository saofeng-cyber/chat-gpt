export const ChatStore = defineStore('chat', () => {
  const CHATLIST = ref<Array<chat.ChatMsg>>([])
  function ADDNEWCHAT(chat: chat.ChatMsg) {
    CHATLIST.value.push(chat)
  }

  function CLEARLIST() {
    CHATLIST.value = []
  }

  return { CHATLIST, ADDNEWCHAT, CLEARLIST }
})
