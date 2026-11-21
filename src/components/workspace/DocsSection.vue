<script setup lang="ts">
import type { DocItem, DocTabKey } from '@/types'
import DocFilters from './DocFilters.vue'
import DocRow from './DocRow.vue'
import DocTabs from './DocTabs.vue'

defineProps<{
  activeTab: DocTabKey
  docs: DocItem[]
}>()

const emit = defineEmits<{
  (e: 'select-tab', key: DocTabKey): void
}>()
</script>

<template>
  <section aria-labelledby="docs-heading">
    <h2 id="docs-heading" class="text-[18px] font-bold text-ink">文档</h2>

    <div class="mt-4 flex flex-wrap items-center justify-between gap-4">
      <DocTabs :active="activeTab" @select="emit('select-tab', $event)" />
      <DocFilters />
    </div>

    <ul class="mt-2">
      <DocRow v-for="doc in docs" :key="doc.id" :doc="doc" />
      <li v-if="docs.length === 0" class="doc-row text-[13px] text-sub">暂无记录</li>
    </ul>
  </section>
</template>
