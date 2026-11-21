<script setup lang="ts">
import { DOC_TABS } from '@/data/documents'
import type { DocTabKey } from '@/types'

const props = defineProps<{ active: DocTabKey }>()

const emit = defineEmits<{
  (e: 'select', key: DocTabKey): void
}>()

const tabClass = (key: DocTabKey) => ({ 'tab-btn--active': props.active === key })
</script>

<template>
  <div class="flex items-center gap-1 rounded-[10px] bg-tab-track p-1" role="tablist">
    <button
      v-for="tab in DOC_TABS"
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
