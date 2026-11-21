<script setup lang="ts">
import { computed, ref } from 'vue'
import Icon from '@/components/icons/Icon.vue'
import EmptyState from '@/components/common/EmptyState.vue'
import PageHeader from '@/components/common/PageHeader.vue'
import PillTabs from '@/components/common/PillTabs.vue'
import NoteCard from '@/components/note/NoteCard.vue'
import QuickCapture from '@/components/note/QuickCapture.vue'
import { DEFAULT_NOTE_TAB, NOTES_BY_TAB, NOTE_TABS } from '@/data/notes'
import type { NoteItem, NoteTabKey } from '@/types'

const activeTab = ref<NoteTabKey>(DEFAULT_NOTE_TAB)

/** 切换标签即切换数据源；只读引用，不改动模块级数据 */
const notes = computed<NoteItem[]>(() => NOTES_BY_TAB[activeTab.value])

function selectTab(key: string): void {
  activeTab.value = key as NoteTabKey
}
</script>

<template>
  <main class="workspace-scroll min-w-0 flex-1 overflow-y-auto bg-canvas px-8 py-7">
    <PageHeader title="小记" description="随手记下灵感与待办，语雀按时间自动整理成流。">
      <template #actions>
        <button type="button" class="btn-primary">
          <Icon name="plus" :size="16" :stroke-width="2" />
          新建小记
        </button>
      </template>
    </PageHeader>

    <div class="mt-5 flex flex-wrap items-center justify-between gap-4">
      <PillTabs :tabs="NOTE_TABS" :active="activeTab" @select="selectTab" />
    </div>

    <div class="mt-6 grid max-w-[1100px] grid-cols-1 items-start gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
      <QuickCapture />

      <ul v-if="notes.length > 0" class="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <NoteCard v-for="note in notes" :key="note.id" :note="note" />
      </ul>
      <EmptyState v-else icon="note" text="该分组下还没有小记，先在左边记一条吧" />
    </div>
  </main>
</template>
