<script setup lang="ts">
import Icon from '@/components/icons/Icon.vue'
import { DOC_FILTERS } from '@/data/documents'
</script>

<template>
  <!-- 按需求说明，筛选下拉只需静态外观，不展开真实菜单 -->
  <div class="flex items-center gap-1">
    <button v-for="menu in DOC_FILTERS" :key="menu.key" type="button" class="filter-btn">
      {{ menu.label }}
      <Icon name="chevronDown" :size="14" :stroke-width="2" />
    </button>

    <span class="ml-3 h-7 w-7 flex-none rounded-full border border-avatar-line bg-avatar" />
  </div>
</template>
