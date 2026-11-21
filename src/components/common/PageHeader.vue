<script setup lang="ts">
/**
 * 各页面统一的标题区：标题 + 可选描述，右侧放操作按钮。
 * h1 保持与「开始」页一致的字号，保证跨页视觉连续。
 */
defineProps<{
  title: string
  description?: string
}>()
</script>

<template>
  <header class="flex flex-wrap items-start justify-between gap-4">
    <div class="min-w-0">
      <h1 class="text-[20px] font-bold text-ink">{{ title }}</h1>
      <p v-if="description" class="mt-1.5 max-w-[560px] text-[13px] text-sub">
        {{ description }}
      </p>
    </div>
    <div class="flex flex-none items-center gap-2">
      <slot name="actions" />
    </div>
  </header>
</template>
