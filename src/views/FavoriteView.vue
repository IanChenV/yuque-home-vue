<script setup lang="ts">
import { computed, ref } from 'vue'
import EmptyState from '@/components/common/EmptyState.vue'
import PageHeader from '@/components/common/PageHeader.vue'
import PillTabs from '@/components/common/PillTabs.vue'
import FavoriteRow from '@/components/favorite/FavoriteRow.vue'
import {
  DEFAULT_FAVORITE_FILTER,
  FAVORITES_BY_KIND,
  FAVORITE_TABS,
  flattenFavorites
} from '@/data/favorites'
import type { FavoriteFilter, FavoriteItem } from '@/types'

const activeFilter = ref<FavoriteFilter>(DEFAULT_FAVORITE_FILTER)

const items = computed<FavoriteItem[]>(() =>
  activeFilter.value === 'all'
    ? flattenFavorites()
    : FAVORITES_BY_KIND[activeFilter.value as FavoriteItem['kind']]
)

function selectFilter(key: string): void {
  activeFilter.value = key as FavoriteFilter
}
</script>

<template>
  <main class="workspace-scroll min-w-0 flex-1 overflow-y-auto bg-canvas px-8 py-7">
    <PageHeader title="收藏" description="好内容值得再看一遍，按类型分门别类收在这里。" />

    <div class="mt-5 flex flex-wrap items-center justify-between gap-4">
      <PillTabs :tabs="FAVORITE_TABS" :active="activeFilter" @select="selectFilter" />
    </div>

    <ul v-if="items.length > 0" class="mt-3">
      <FavoriteRow v-for="item in items" :key="item.id" :item="item" />
    </ul>
    <EmptyState v-else icon="star" text="还没有收藏该内容，去「逛逛」发现好文章再点回来" />
  </main>
</template>
