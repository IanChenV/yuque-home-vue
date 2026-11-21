<script setup lang="ts">
import { computed, ref } from 'vue'
import EmptyState from '@/components/common/EmptyState.vue'
import PageHeader from '@/components/common/PageHeader.vue'
import PillTabs from '@/components/common/PillTabs.vue'
import ExploreCard from '@/components/explore/ExploreCard.vue'
import { DEFAULT_EXPLORE_CATEGORY, EXPLORE_CATEGORIES, EXPLORE_POSTS } from '@/data/explore'
import type { ExplorePost } from '@/types'

const activeCategory = ref<string>(DEFAULT_EXPLORE_CATEGORY)

/** 「推荐」展示全部，其余频道按 category 过滤；filter 返回新数组，不改源数据 */
const posts = computed<ExplorePost[]>(() =>
  activeCategory.value === 'all'
    ? EXPLORE_POSTS
    : EXPLORE_POSTS.filter((post) => post.category === activeCategory.value)
)

function selectCategory(key: string): void {
  activeCategory.value = key
}
</script>

<template>
  <main class="workspace-scroll min-w-0 flex-1 overflow-y-auto bg-canvas px-8 py-7">
    <PageHeader title="逛逛" description="看看别人怎么整理知识，为下一个文档找点灵感。" />

    <div class="mt-5">
      <PillTabs :tabs="EXPLORE_CATEGORIES" :active="activeCategory" @select="selectCategory" />
    </div>

    <ul v-if="posts.length > 0" class="mt-6 grid max-w-[1100px] grid-cols-1 gap-4 xl:grid-cols-2">
      <ExploreCard v-for="post in posts" :key="post.id" :post="post" />
    </ul>
    <EmptyState v-else icon="grid" text="该频道暂无推荐内容，换个频道看看" />
  </main>
</template>
