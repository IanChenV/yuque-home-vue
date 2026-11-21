<script setup lang="ts">
import type { TabItem } from '@/types'

/**
 * 通用 pill 标签组（小记 / 收藏 / 知识库 / 逛逛均在用）。
 * 与 DocTabs 一样选中态由父级单点持有，本组件纯展示 + 派发。
 */
const props = defineProps<{
  tabs: TabItem[]
  active: string
}>()

const emit = defineEmits<{
  (e: 'select', key: string): void
}>()

const tabClass = (key: string) => ({ 'tab-btn--active': props.active === key })
</script>

<template>
  <div class="flex items-center gap-1 rounded-[10px] bg-tab-track p-1" role="tablist">
    <button
      v-for="tab in tabs"
      :key="tab.key"
      type="button"
      role="tab"
      :aria-selected="active === tab.key"
      class="tab-btn"
      :class="tabClass(tab.key)"
      @click="emit('select', tab.key)"
    >
      {{ tab.label }}
    </button>
  </div>
</template>
