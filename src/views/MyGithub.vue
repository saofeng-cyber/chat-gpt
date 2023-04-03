<template>
  <h3 @click="test">github</h3>
</template>
<script setup lang="ts">
import { test_api } from '@/api/test'

const test = async () => {
  const data = await test_api()
  console.log(data)
}
</script>
