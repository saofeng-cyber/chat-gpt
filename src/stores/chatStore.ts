import { ref } from 'vue'
import { defineStore } from 'pinia'

export const ChatStore = defineStore('chat', () => {
  const CHATLIST = ref<any[]>([])
  function ADDNEWCHAT(chat: any) {
    CHATLIST.value.push(chat)
  }

  function CLEARLIST() {
    CHATLIST.value = []
  }

  return { CHATLIST, ADDNEWCHAT, CLEARLIST }
})
