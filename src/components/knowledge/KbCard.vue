<script setup lang="ts">
import Icon from '@/components/icons/Icon.vue'
import type { IconName, KnowledgeBaseKind, KnowledgeBaseModel } from '@/types'

defineProps<{ kb: KnowledgeBaseModel }>()

const KIND_ICON: Record<KnowledgeBaseKind, IconName> = {
  doc: 'knowledge',
  sheet: 'sheet',
  board: 'board'
}

const PRIVACY_TEXT: Record<KnowledgeBaseModel['privacy'], string> = {
  public: '公开',
  private: '隐私'
}
</script>

<template>
  <li class="func-card flex-col items-start gap-2.5">
    <div class="flex w-full items-center gap-2.5">
      <Icon :name="KIND_ICON[kb.kind]" :size="20" class="flex-none text-doc" />
      <h3 class="min-w-0 flex-1 truncate text-[15px] font-bold text-ink">{{ kb.name }}</h3>
      <span
        v-if="kb.pinned"
        class="flex-none rounded-pill bg-badge-bg px-2.5 py-0.5 text-[12px] text-badge-1688"
        >置顶</span
      >
    </div>

    <p class="w-full text-[13px] leading-relaxed text-muted">{{ kb.description }}</p>

    <footer class="flex w-full items-center justify-between text-[12px] text-sub">
      <span class="flex items-center gap-3">
        <span>{{ kb.docCount }} 篇内容</span>
        <span class="flex items-center gap-1">
          <Icon :name="kb.privacy === 'public' ? 'globe' : 'lock'" :size="13" :stroke-width="1.6" />
          {{ PRIVACY_TEXT[kb.privacy] }}
        </span>
      </span>
      <span class="flex-none">{{ kb.updatedAt }}</span>
    </footer>
  </li>
</template>
