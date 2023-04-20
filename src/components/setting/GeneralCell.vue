<script setup lang="ts">
import { Save24Filled, WeatherSunny24Filled, WeatherMoon24Filled } from '@vicons/fluent'
import { RefreshCircle } from '@vicons/ionicons5'
import { userStore } from '@/stores/user/userStore'
import { appStore } from '@/stores/app/appStore'
import { Theme } from '@/stores/app/helper'
import { NIcon } from 'naive-ui'

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const ms = useMessage()
const user = userStore()
const useAppStore = appStore()
const { theme } = storeToRefs(useAppStore)
const { userInfo } = storeToRefs(user)
const saveUserInfo = () => {
  user.updateUserInfo(userInfo.value)
  ms.success('保存成功')
}
const themeOptions: Array<{ label: string; value: Theme; icon: Component }> = [
  {
    label: '默认主题',
    value: 'light',
    icon: renderIcon(WeatherSunny24Filled)
  },
  {
    label: '暗黑主题',
    value: 'dark',
    icon: renderIcon(WeatherMoon24Filled)
  }
]

const options = [
  {
    label: '简体中文',
    value: 'zh-CN'
  },
  {
    label: 'English',
    value: 'en-US'
  }
]

const language = ref<string>('zh-CN')

const changeTheme = (theme: Theme) => {
  useAppStore.setTheme(theme)
}

const resetUserInfo = () => {
  user.resetState()
  useAppStore.resetState()
  ms.success('重置成功')
}
</script>
<template>
  <n-space vertical :size="18">
    <div class="flex items-center justify-between mx-2">
      <div class="w-[100px]">
        <n-text>头像链接</n-text>
      </div>
      <div class="flex-1 mr-4">
        <n-input v-model:value="userInfo.avatar" />
      </div>
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-button text @click="saveUserInfo">
            <template #icon>
              <n-icon><Save24Filled /></n-icon>
            </template>
          </n-button>
        </template>
        保存配置
      </n-tooltip>
    </div>
    <div class="flex items-center justify-between mx-2">
      <div class="w-[100px]">
        <n-text>名称</n-text>
      </div>
      <div class="flex-1 mr-4">
        <n-input v-model:value="userInfo.userName" />
      </div>
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-button text @click="saveUserInfo">
            <template #icon>
              <n-icon><Save24Filled /></n-icon>
            </template>
          </n-button>
        </template>
        保存配置
      </n-tooltip>
    </div>
    <div class="flex items-center justify-between mx-2">
      <div class="w-[100px]">
        <n-text>描述</n-text>
      </div>
      <div class="flex-1 mr-4">
        <n-input v-model:value="userInfo.description" />
      </div>
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-button text @click="saveUserInfo">
            <template #icon>
              <n-icon><Save24Filled /></n-icon>
            </template>
          </n-button>
        </template>
        保存配置
      </n-tooltip>
    </div>
    <div class="flex items-center justify-between mx-2">
      <div class="w-[100px]">
        <n-text>系统主题</n-text>
      </div>
      <div class="flex flex-1 gap-4 mr-4">
        <template v-for="item in themeOptions" :key="item.label">
          <n-button
            text
            :type="item.value === theme ? 'primary' : undefined"
            @click="changeTheme(item.value)"
          >
            <template #icon>
              <component :is="item.icon"></component>
            </template>
          </n-button>
        </template>
      </div>
    </div>
    <div class="flex items-center justify-between mx-2">
      <div class="w-[100px]">
        <n-text>语言</n-text>
      </div>
      <div class="flex flex-1 gap-4 mr-4">
        <n-select
          v-model:value="language"
          :options="options"
          placeholder="请选择语言"
          style="width: 140px"
        />
      </div>
    </div>
    <div class="flex items-center justify-between mx-2">
      <div class="w-[100px]">
        <n-text>重置用户信息</n-text>
      </div>
      <div class="flex flex-1 gap-4 mr-4">
        <n-button text @click="resetUserInfo">
          <template #icon>
            <n-icon size="24">
              <RefreshCircle />
            </n-icon>
          </template>
        </n-button>
      </div>
    </div>
  </n-space>
</template>
