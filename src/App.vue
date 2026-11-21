<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import AppSidebar from '@/components/sidebar/AppSidebar.vue'
import { useSidebar } from '@/composables/useSidebar'

// 侧边栏只保留纯 UI 状态（促销卡 / 树折叠），页面选中态由路由单点持有
const route = useRoute()
const router = useRouter()
const {
  promoVisible,
  knowledgeExpanded,
  teamExpanded,
  dismissPromo,
  toggleKnowledge,
  toggleTeam
} = useSidebar()

/** 导航 key 与路由 name 同名（见 data/nav.ts 与 router/index.ts） */
function selectNav(key: string): void {
  if (route.name !== key) {
    router.push({ name: key })
  }
}
</script>

<template>
  <div class="flex h-screen overflow-hidden">
    <AppSidebar
      :active-nav="String(route.name ?? '')"
      :promo-visible="promoVisible"
      :knowledge-expanded="knowledgeExpanded"
      :team-expanded="teamExpanded"
      @select-nav="selectNav"
      @dismiss-promo="dismissPromo"
      @toggle-knowledge="toggleKnowledge"
      @toggle-team="toggleTeam"
    />
    <RouterView />
  </div>
</template>
