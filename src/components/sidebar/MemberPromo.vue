<script setup lang="ts">
import Icon from '@/components/icons/Icon.vue'

defineProps<{ visible: boolean }>()

const emit = defineEmits<{
  (e: 'dismiss'): void
}>()
</script>

<template>
  <div
    v-if="visible"
    class="mb-2 mx-2 flex-none rounded-[10px] border border-promo-line bg-promo-bg p-3"
  >
    <div class="flex items-center justify-between gap-1">
      <p class="whitespace-nowrap text-[12px] leading-4 text-ink">
        更大附件、更多流量、更多权益等
      </p>
      <button
        type="button"
        aria-label="关闭会员提示"
        class="flex-none text-sub transition-colors hover:text-ink"
        @click="emit('dismiss')"
      >
        <Icon name="close" :size="14" :stroke-width="1.8" />
      </button>
    </div>

    <div class="mt-3 flex items-center gap-2">
      <button type="button" class="promo-btn">购买会员</button>
      <button type="button" class="promo-btn">免费领会员</button>
    </div>
  </div>
</template>
