<script setup lang="ts">
import Icon from '@/components/icons/Icon.vue'
import PageHeader from '@/components/common/PageHeader.vue'
import BoardCard from '@/components/board/BoardCard.vue'
import { BOARDS, BOARD_INTRO } from '@/data/boards'
</script>

<template>
  <main class="workspace-scroll min-w-0 flex-1 overflow-y-auto bg-canvas px-8 py-7">
    <PageHeader title="Board" description="选择知识库，让语雀帮你完成采集、整理与智能分析。">
      <template #actions>
        <button type="button" class="btn-primary">
          <Icon name="plus" :size="16" :stroke-width="2" />
          新建 Board
        </button>
      </template>
    </PageHeader>

    <!-- 引导卡：三步说明，功能内测阶段的静态内容 -->
    <section
      aria-labelledby="board-intro"
      class="mt-6 rounded-card border border-line bg-surface p-6 shadow-card"
    >
      <h2 id="board-intro" class="text-[15px] font-bold text-ink">{{ BOARD_INTRO.title }}</h2>
      <p class="mt-1.5 max-w-[640px] text-[13px] leading-relaxed text-muted">
        {{ BOARD_INTRO.description }}
      </p>
      <ol class="mt-4 flex flex-wrap gap-x-8 gap-y-2">
        <li
          v-for="(step, index) in BOARD_INTRO.steps"
          :key="step.key"
          class="flex items-center gap-2 text-[13px] text-ink"
        >
          <span
            class="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand text-[11px] font-bold text-white"
            >{{ index + 1 }}</span
          >
          {{ step.text }}
        </li>
      </ol>
    </section>

    <h2 class="mt-8 text-[18px] font-bold text-ink">我的 Board</h2>

    <ul class="mt-4 grid max-w-[960px] grid-cols-1 gap-4 md:grid-cols-2">
      <BoardCard v-for="board in BOARDS" :key="board.id" :board="board" />
    </ul>
  </main>
</template>
