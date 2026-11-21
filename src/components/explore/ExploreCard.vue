<script setup lang="ts">
import Icon from '@/components/icons/Icon.vue'
import type { ExplorePost } from '@/types'

defineProps<{ post: ExplorePost }>()

/** 点赞数超过千位时缩写为「1.3k」，避免长数字挤压布局 */
function formatCount(value: number): string {
  return value >= 1000 ? `${(value / 1000).toFixed(1)}k` : String(value)
}
</script>

<template>
  <li class="func-card flex-col items-start gap-2.5">
    <div class="flex w-full items-center gap-2">
      <Icon name="doc" :size="18" class="flex-none" />
      <h3 class="min-w-0 flex-1 truncate text-[15px] font-bold text-ink">{{ post.title }}</h3>
    </div>

    <p class="w-full text-[13px] leading-relaxed text-muted">{{ post.summary }}</p>

    <footer class="flex w-full items-center justify-between gap-3 text-[12px] text-sub">
      <span class="flex min-w-0 items-center gap-2">
        <span
          class="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-avatar text-[11px] text-ink"
          >{{ post.author.slice(0, 1) }}</span
        >
        <span class="truncate">{{ post.author }} · {{ post.bookName }}</span>
      </span>

      <span class="flex flex-none items-center gap-3">
        <span class="flex items-center gap-1">
          <Icon name="heart" :size="14" :stroke-width="1.6" />
          {{ formatCount(post.likes) }}
        </span>
        <span class="flex items-center gap-1">
          <Icon name="comment" :size="14" :stroke-width="1.6" />
          {{ formatCount(post.comments) }}
        </span>
      </span>
    </footer>
  </li>
</template>
