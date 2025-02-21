<template>
  <div v-html="content"></div>
</template>

<script setup lang="ts">
defineProps<{
  content: string;
}>()
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
