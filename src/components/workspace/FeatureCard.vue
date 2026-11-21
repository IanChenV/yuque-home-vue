<script setup lang="ts">
import Icon from '@/components/icons/Icon.vue'
import type { FeatureCardModel } from '@/types'

defineProps<{ card: FeatureCardModel }>()
</script>

<template>
  <article class="func-card">
    <Icon :name="card.icon" :size="26" />

    <div class="min-w-0 flex-1">
      <div class="flex items-center gap-2">
        <h3 class="truncate text-[15px] font-bold text-ink">{{ card.title }}</h3>
        <span
          v-if="card.badge"
          class="flex-none rounded-[4px] bg-badge-bg px-1.5 py-0.5 text-[12px] leading-4 text-accent"
        >
          {{ card.badge }}
        </span>
      </div>
      <p class="mt-1.5 truncate text-[13px] text-sub">{{ card.description }}</p>
    </div>

    <Icon
      v-if="card.hasCaret"
      name="chevronDown"
      :size="16"
      :stroke-width="1.8"
      class="self-center text-sub"
    />
  </article>
</template>
