<script setup lang="ts">
import Icon from '@/components/icons/Icon.vue'

/** 未读消息数，来自真实接口时替换此常量即可 */
const unreadCount = 2
</script>

<template>
  <div class="float-rail flex flex-col items-center gap-3">
    <span class="h-11 w-11 flex-none overflow-hidden rounded-full border-2 border-white bg-avatar shadow-float" />

    <span class="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-badge-1688 text-[11px] font-bold leading-none text-white">
      1688
    </span>

    <button type="button" aria-label="反馈" class="relative flex h-10 w-10 flex-none items-center justify-center rounded-full border border-line bg-white shadow-float">
      <Icon name="smile" :size="20" />
      <span class="absolute -right-1 -top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-notify text-[11px] font-bold text-white">
        {{ unreadCount }}
      </span>
    </button>
  </div>
</template>

<style scoped>
/* 窄屏下让位给筛选行头像，避免重叠 */
.float-rail {
  position: fixed;
  right: 16px;
  top: 340px;
}

@media (max-width: 1360px) {
  .float-rail {
    display: none;
  }
}
</style>
