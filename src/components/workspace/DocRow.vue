<script setup lang="ts">
import Icon from '@/components/icons/Icon.vue'
import type { DocItem } from '@/types'

defineProps<{ doc: DocItem }>()
</script>

<template>
  <li class="doc-row doc-grid">
    <div class="flex min-w-0 items-center gap-3">
      <Icon name="doc" :size="18" />
      <span class="flex min-w-0 items-center gap-1.5">
        <Icon
          v-if="doc.leadingIcon"
          :name="doc.leadingIcon"
          :size="16"
          :stroke-width="1.6"
          class="text-accent"
        />
        <span class="truncate text-[14px] text-ink">{{ doc.title }}</span>
      </span>
    </div>

    <div class="truncate pr-8 text-right text-[13px] text-sub">{{ doc.path }}</div>
    <div class="text-[13px] text-sub">{{ doc.updatedAt }}</div>
  </li>
</template>

<style scoped>
/* 三栏：标题自适应，路径与时间右对齐；窄屏收窄固定列宽 */
.doc-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 300px 150px;
  align-items: center;
}

@media (max-width: 1360px) {
  .doc-grid {
    grid-template-columns: minmax(0, 1fr) 240px 120px;
  }
}
</style>
