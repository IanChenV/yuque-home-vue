<script setup lang="ts">
import Icon from '@/components/icons/Icon.vue'
</script>

<template>
  <div class="flex h-14 flex-none items-center justify-between px-4">
    <div class="flex cursor-pointer items-center gap-2">
      <span class="flex h-7 w-7 flex-none items-center justify-center rounded-[8px] bg-brand">
        <Icon name="logoLeaf" :size="16" :stroke-width="1.8" />
      </span>
      <span class="text-[16px] font-bold tracking-wide">语雀</span>
      <Icon name="chevronDown" :size="14" :stroke-width="2" class="text-sub" />
    </div>

    <div class="flex items-center gap-3">
      <button type="button" class="relative text-ink" aria-label="通知">
        <Icon name="bell" :size="20" />
        <i class="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-notify" />
      </button>
      <span class="h-7 w-7 flex-none rounded-full border border-avatar-line bg-avatar" />
    </div>
  </div>
</template>
