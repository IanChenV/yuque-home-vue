<script setup lang="ts">
import Icon from '@/components/icons/Icon.vue'
import type { IconName } from '@/types'

withDefaults(
  defineProps<{
    text: string
    icon?: IconName
  }>(),
  { icon: 'bulb' }
)
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-2 rounded-card border border-dashed border-line py-14 text-sub">
    <Icon :name="icon" :size="26" :stroke-width="1.4" />
    <p class="text-[13px]">{{ text }}</p>
    <slot />
  </div>
</template>
