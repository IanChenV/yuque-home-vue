<script setup lang="ts">
import { computed, ref } from 'vue'
import Icon from '@/components/icons/Icon.vue'
import EmptyState from '@/components/common/EmptyState.vue'
import PageHeader from '@/components/common/PageHeader.vue'
import PillTabs from '@/components/common/PillTabs.vue'
import KbCard from '@/components/knowledge/KbCard.vue'
import {
  DEFAULT_KNOWLEDGE_TAB,
  KNOWLEDGE_BASES_BY_TAB,
  KNOWLEDGE_TABS
} from '@/data/knowledgeBases'
import type { KnowledgeBaseModel, KnowledgeTabKey } from '@/types'

const activeTab = ref<KnowledgeTabKey>(DEFAULT_KNOWLEDGE_TAB)

const knowledgeBases = computed<KnowledgeBaseModel[]>(() => KNOWLEDGE_BASES_BY_TAB[activeTab.value])

function selectTab(key: string): void {
  activeTab.value = key as KnowledgeTabKey
}
</script>

<template>
  <main class="workspace-scroll min-w-0 flex-1 overflow-y-auto bg-canvas px-8 py-7">
    <PageHeader title="知识库" description="按项目与主题归档内容，支持公开、隐私与团队共享。">
      <template #actions>
        <button type="button" class="btn-primary">
          <Icon name="knowledgeAdd" :size="18" />
          新建知识库
        </button>
      </template>
    </PageHeader>

    <div class="mt-5">
      <PillTabs :tabs="KNOWLEDGE_TABS" :active="activeTab" @select="selectTab" />
    </div>

    <ul v-if="knowledgeBases.length > 0" class="mt-6 grid max-w-[1100px] grid-cols-1 gap-4 xl:grid-cols-2">
      <KbCard v-for="kb in knowledgeBases" :key="kb.id" :kb="kb" />
    </ul>
    <EmptyState v-else icon="knowledge" text="还没有加入过知识库，创建一个开始整理吧" />
  </main>
</template>
