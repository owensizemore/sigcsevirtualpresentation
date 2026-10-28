<script setup lang="ts">
import { useNav } from '@slidev/client'

const { currentPage, total } = useNav()
</script>

<template>
  <div class="slide-page-number">{{ currentPage }} / {{ total }}</div>
</template>

<style scoped>
.slide-page-number {
  position: absolute;
  right: 1.5rem;
  bottom: 1rem;
  font-size: 0.875rem;
  opacity: 0.5;
  pointer-events: none;
}
</style>
