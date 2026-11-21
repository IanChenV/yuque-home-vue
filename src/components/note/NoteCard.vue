<script setup lang="ts">
import Icon from '@/components/icons/Icon.vue'
import type { NoteItem } from '@/types'

defineProps<{ note: NoteItem }>()
</script>

<template>
  <li class="func-card flex-col items-start gap-2">
    <div class="flex w-full items-center justify-between">
      <time class="text-[12px] text-sub">{{ note.date }}</time>
      <span class="flex items-center gap-1.5 text-accent">
        <Icon v-if="note.starred" name="star" :size="14" class="text-accent" />
        <Icon v-if="note.marked" name="bulb" :size="14" />
      </span>
    </div>

    <p class="w-full whitespace-pre-wrap break-words text-[14px] leading-relaxed text-ink">
      {{ note.content }}
    </p>

    <footer class="mt-1 text-[12px] text-sub">
      <span class="rounded-pill bg-side-hover px-2.5 py-0.5">{{ note.groupName }}</span>
    </footer>
  </li>
</template>
