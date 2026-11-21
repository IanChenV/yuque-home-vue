<script setup lang="ts">
import PageHeader from '@/components/common/PageHeader.vue'
import type { DocItem, DocTabKey } from '@/types'
import DocsSection from './DocsSection.vue'
import FeatureGrid from './FeatureGrid.vue'
import FloatingRail from './FloatingRail.vue'
import QuickActions from './QuickActions.vue'

defineProps<{
  activeTab: DocTabKey
  docs: DocItem[]
}>()

const emit = defineEmits<{
  (e: 'select-tab', key: DocTabKey): void
}>()
</script>

<template>
  <main class="workspace-scroll relative min-w-0 flex-1 overflow-y-auto bg-white px-8 py-7">
    <PageHeader title="开始" />

    <FeatureGrid class="mt-5" />

    <DocsSection
      class="mt-8"
      :active-tab="activeTab"
      :docs="docs"
      @select-tab="emit('select-tab', $event)"
    />

    <FloatingRail />
    <QuickActions />
  </main>
</template>
