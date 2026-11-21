<script setup lang="ts">
import Icon from '@/components/icons/Icon.vue'
</script>

<template>
  <div class="flex flex-none items-center gap-2 px-4 pb-3">
    <label class="flex h-9 min-w-0 flex-1 items-center gap-2 rounded-btn bg-side-hover px-3">
      <Icon name="search" :size="16" :stroke-width="1.8" class="text-sub" />
      <input
        type="search"
        placeholder="搜索"
        aria-label="搜索"
        class="min-w-0 flex-1 bg-transparent text-[13px] text-ink outline-none placeholder:text-sub"
      />
      <kbd class="flex-none text-[12px] font-normal text-sub">⌘ J</kbd>
    </label>

    <button
      type="button"
      aria-label="新建"
      class="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-line-strong"
    >
      <Icon name="plus" :size="16" :stroke-width="1.8" />
    </button>
  </div>
</template>
