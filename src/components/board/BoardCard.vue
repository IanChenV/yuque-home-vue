<script setup lang="ts">
import Icon from '@/components/icons/Icon.vue'
import type { BoardModel } from '@/types'

defineProps<{ board: BoardModel }>()

const STATUS_TEXT = { ready: '已生成', analyzing: '分析中' } as const
</script>

<template>
  <li class="func-card flex-col items-start gap-2.5">
    <div class="flex w-full items-center justify-between gap-3">
      <span class="flex min-w-0 items-center gap-2.5">
        <Icon name="boardMark" :size="22" />
        <span class="truncate text-[15px] font-bold text-ink">{{ board.title }}</span>
      </span>
      <span
        class="flex-none rounded-pill px-2.5 py-0.5 text-[12px]"
        :class="board.status === 'ready' ? 'bg-side-hover text-brand' : 'bg-badge-bg text-accent'"
      >
        {{ STATUS_TEXT[board.status] }}
      </span>
    </div>

    <p class="text-[13px] leading-relaxed text-muted">{{ board.summary }}</p>

    <footer class="flex w-full items-center justify-between text-[12px] text-sub">
      <span class="flex min-w-0 items-center gap-1.5">
        <Icon name="knowledge" :size="14" :stroke-width="1.6" />
        <span class="truncate">来自知识库：{{ board.sourceName }}</span>
      </span>
      <span class="flex-none">{{ board.updatedAt }}</span>
    </footer>
  </li>
</template>
