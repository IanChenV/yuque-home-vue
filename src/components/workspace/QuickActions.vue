<script setup lang="ts">
import Icon from '@/components/icons/Icon.vue'
</script>

<template>
  <div class="fixed bottom-7 right-8 flex items-center gap-4">
    <button
      type="button"
      class="flex h-10 items-center gap-2 rounded-pill bg-brand px-5 text-[14px] text-white transition-colors hover:bg-brand-hover"
    >
      <!-- 按钮本身是 text-white，图标描边继承 currentColor 即可，无需写死色值 -->
      <Icon name="bulb" :size="16" :stroke-width="1.8" />
      快速上手
    </button>

    <button
      type="button"
      aria-label="联系客服"
      class="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-line bg-white shadow-float transition-colors hover:border-line-strong"
    >
      <Icon name="headset" :size="20" :stroke-width="1.6" />
    </button>
  </div>
</template>
