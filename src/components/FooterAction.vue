<template>
  <div class="p-4 shadow">
    <div style="display: grid; grid-template-columns: auto 1fr auto">
      <div class="flex items-center gap-4">
        <n-button text style="font-size: 24px">
          <n-icon>
            <Delete20Filled />
          </n-icon>
        </n-button>
        <n-button text style="font-size: 24px">
          <n-icon>
            <CloudDownload />
          </n-icon>
        </n-button>
        <n-button text style="font-size: 24px" @click="gptTest">
          <n-icon>
            <ChatbubbleEllipsesSharp />
          </n-icon>
        </n-button>
      </div>

      <div class="px-4">
        <n-input
          v-model:value="prompt"
          type="textarea"
          :autosize="{ minRows: 1, maxRows: 8 }"
          placeholder="来说点什么嘛，shift + enter 可以换行..."
          @keypress="handlePress"
        />
      </div>
      <n-button size="medium" type="primary" @click="generateChat">
        <template #icon>
          <n-icon>
            <PaperPlane />
          </n-icon>
        </template>
      </n-button>
    </div>
  </div>
</template>
<script lang="ts">
import { PaperPlane, CloudDownload, ChatbubbleEllipsesSharp } from '@vicons/ionicons5'
import { Delete20Filled } from '@vicons/fluent'
import { useChat } from '@/hooks/useChat'
import { useNow, useDateFormat } from '@vueuse/core'
// import { getCompletion } from '@/api'
import { completion, generations } from '@/config'
export default defineComponent({
  components: {
    PaperPlane,
    Delete20Filled,
    CloudDownload,
    ChatbubbleEllipsesSharp
  },
  setup() {
    const prompt = ref<string>('')
    const message = useMessage()
    const generateChat = async () => {
      if (!prompt.value || prompt.value === '') {
        message.warning('请先输入要说的内容', {
          type: 'warning',
          closable: true
        })
        return
      }
      try {
        const dateTime = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss', { locales: 'en-US' })
        const msg: chat.ChatMsg = {
          dateTime: dateTime.value,
          inversion: true,
          text: prompt.value
        }
        useChat().addChat(msg)
        const res: any = await completion(prompt.value)
        const response: string = res.data.choices[0].message.content
        useChat().addChat({
          dateTime: useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss', { locales: 'en-US' }).value,
          inversion: false,
          text: response
        })
        console.log(useChat().chatList)
        prompt.value = ''
      } catch (err) {
        message.error(`${err}`)
      }
    }

    const handlePress = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault()
        generateChat()
      } else if (event.key === 'Enter' && event.ctrlKey) {
        event.preventDefault()
        generateChat()
      }
    }

    const gptTest = () => {
      generations(prompt.value).then((res) => {
        console.log(res)
      })
    }
    return {
      prompt,
      generateChat,
      handlePress,
      gptTest
    }
  }
})
</script>
