<script setup lang="ts">
import { useTheme } from '@/hooks/useTheme'
const { globaltheme } = useTheme()
</script>

<template>
  <n-config-provider class="h-full" :theme="globaltheme">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </n-config-provider>
</template>

<style scoped></style>
