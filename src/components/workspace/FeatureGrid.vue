<script setup lang="ts">
import { FEATURE_CARDS } from '@/data/features'
import FeatureCard from './FeatureCard.vue'
</script>

<template>
  <section class="feature-grid grid gap-4" aria-label="快捷入口">
    <FeatureCard v-for="card in FEATURE_CARDS" :key="card.key" :card="card" />
  </section>
</template>

<style scoped>
/*
 * 1440 宽为 4 列；窄到 1360 以下降为 2 列，避免副文案换行撑破卡片高度。
 * 这里不需要 !important：Vite 把 SFC 样式注入在 Tailwind 之后，
 * 且 scoped 属性选择器自带额外特异性（CDN 版曾因此踩过覆盖问题）。
 */
.feature-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

@media (max-width: 1360px) {
  .feature-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
