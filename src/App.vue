<script setup lang="ts">
import { themeStore } from './stores/themeStore'

const useThemeStore = themeStore()
const { themeOverrides, theme } = storeToRefs(useThemeStore)
</script>

<template>
  <n-config-provider class="h-full" :theme="theme" :theme-overrides="themeOverrides">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </n-config-provider>
</template>

<style scoped></style>
