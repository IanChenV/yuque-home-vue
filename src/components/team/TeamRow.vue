<script setup lang="ts">
import type { TeamModel } from '@/types'

defineProps<{ team: TeamModel }>()
</script>

<template>
  <li class="doc-row team-grid">
    <span
      class="flex h-10 w-10 flex-none items-center justify-center rounded-card bg-avatar text-[15px] font-bold text-ink"
      >{{ team.initial }}</span
    >

    <div class="min-w-0">
      <p class="truncate text-[14px] font-bold text-ink">{{ team.name }}</p>
      <p class="truncate text-[12px] text-sub">{{ team.description }}</p>
    </div>

    <div class="text-[13px] text-muted">
      {{ team.members }} 名成员 · {{ team.books }} 个知识库
    </div>

    <div class="text-[13px] text-sub">{{ team.updatedAt }}</div>

    <button type="button" class="btn-ghost justify-center">访问</button>
  </li>
</template>

<style scoped>
/* 头像 + 名称 + 统计 + 时间 + 操作，窄屏收起时间列 */
.team-grid {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) 220px 140px 88px;
  align-items: center;
  gap: 16px;
}

@media (max-width: 1360px) {
  .team-grid {
    grid-template-columns: auto minmax(0, 1fr) 160px 100px 80px;
  }
}
</style>
