<script setup lang="ts">
import Icon from '@/components/icons/Icon.vue'
import type { FavoriteItem } from '@/types'

defineProps<{ item: FavoriteItem }>()
</script>

<template>
  <li class="doc-row fav-grid">
    <div class="flex min-w-0 items-center gap-3">
      <Icon name="star" :size="16" class="flex-none text-accent" />
      <Icon :name="item.icon" :size="18" class="flex-none" />
      <span class="truncate text-[14px] text-ink">{{ item.title }}</span>
    </div>

    <div class="truncate text-[13px] text-sub">{{ item.source }}</div>

    <div class="text-center">
      <span
        v-if="item.folder"
        class="inline-block max-w-full truncate rounded-pill bg-side-hover px-2.5 py-0.5 text-[12px] text-muted"
        >{{ item.folder }}</span
      >
    </div>

    <div class="text-[13px] text-sub">{{ item.favoritedAt }}</div>
  </li>
</template>

<style scoped>
/* 四栏：标题自适应，来源与收藏夹定宽，时间右对齐 */
.fav-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 280px 140px 100px;
  align-items: center;
  gap: 12px;
}

@media (max-width: 1360px) {
  .fav-grid {
    grid-template-columns: minmax(0, 1fr) 200px 120px 80px;
  }
}
</style>
