<template>
  <n-avatar round v-if="image" :src="url"></n-avatar>
  <n-icon size="32" v-else>
    <ChatSvg />
  </n-icon>
</template>
<script lang="ts">
import ChatSvg from './icons/ChatSvg.vue'

export default defineComponent({
  props: {
    image: {
      type: Boolean
    }
  },
  setup() {
    return {
      url: 'http://q.qlogo.cn/headimg_dl?dst_uin=942391953&spec=640&img_type=jpg'
    }
  },
  components: { ChatSvg }
})
</script>
