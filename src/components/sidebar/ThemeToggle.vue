<script setup lang="ts">
import Icon from '@/components/icons/Icon.vue'
import type { ThemeMode } from '@/composables/useTheme'

defineProps<{ mode: ThemeMode }>()

const emit = defineEmits<{
  (e: 'toggle'): void
}>()
</script>

<template>
  <button
    type="button"
    class="flex h-8 w-8 flex-none items-center justify-center rounded-btn text-sub transition-colors hover:bg-side-hover hover:text-ink"
    :aria-label="mode === 'dark' ? '切换到亮色主题' : '切换到深色主题'"
    :title="mode === 'dark' ? '切换到亮色主题' : '切换到深色主题'"
    @click="emit('toggle')"
  >
    <Icon :name="mode === 'dark' ? 'sun' : 'moon'" :size="18" />
  </button>
</template>
