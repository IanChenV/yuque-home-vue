<script setup lang="ts">
import Icon from '@/components/icons/Icon.vue'
import { useTheme } from '@/composables/useTheme'
import { KNOWLEDGE_CHILDREN, KNOWLEDGE_NAV, MAIN_NAV, TEAM_NAV } from '@/data/nav'
import { TEAMS } from '@/data/teams'
import BrandBar from './BrandBar.vue'
import MemberPromo from './MemberPromo.vue'
import SearchBox from './SearchBox.vue'
import SideGroup from './SideGroup.vue'
import ThemeToggle from './ThemeToggle.vue'

const props = defineProps<{
  activeNav: string
  promoVisible: boolean
  knowledgeExpanded: boolean
  teamExpanded: boolean
}>()

const emit = defineEmits<{
  (e: 'select-nav', key: string): void
  (e: 'dismiss-promo'): void
  (e: 'toggle-knowledge'): void
  (e: 'toggle-team'): void
}>()

const navItemClass = (key: string) => ({ 'nav-item--active': props.activeNav === key })

// 主题是全局偏好，直接在侧边栏持有，App 与其他页面不感知
const { mode, toggle: toggleTheme } = useTheme()
</script>

<template>
  <aside class="flex w-[240px] flex-none flex-col border-r border-side-line bg-side">
    <BrandBar />
    <SearchBox />

    <nav class="min-h-0 flex-1 overflow-y-auto px-2" aria-label="主导航">
      <ul class="space-y-0.5">
        <li v-for="item in MAIN_NAV" :key="item.key">
          <button
            type="button"
            class="nav-item w-full text-left"
            :class="navItemClass(item.key)"
            @click="emit('select-nav', item.key)"
          >
            <Icon :name="item.icon" />
            {{ item.label }}
          </button>
        </li>

        <!-- 树分组：点击头部跳转列表页，同时折叠/展开子项 -->
        <SideGroup
          :nav="KNOWLEDGE_NAV"
          :expanded="knowledgeExpanded"
          :active="activeNav === KNOWLEDGE_NAV.key"
          @click="emit('toggle-knowledge'); emit('select-nav', KNOWLEDGE_NAV.key)"
        >
          <template #children>
            <li v-for="child in KNOWLEDGE_CHILDREN" :key="child.label">
              <button
                type="button"
                class="nav-item w-full pl-[34px] text-left text-[13px]"
                @click="emit('select-nav', KNOWLEDGE_NAV.key)"
              >
                <Icon name="doc" :size="18" />
                <span>{{ child.label }}</span>
                <Icon
                  v-if="child.locked"
                  name="lock"
                  :size="14"
                  :stroke-width="1.6"
                  class="text-sub"
                />
              </button>
            </li>
          </template>
        </SideGroup>

        <SideGroup
          :nav="TEAM_NAV"
          :expanded="teamExpanded"
          :active="activeNav === TEAM_NAV.key"
          @click="emit('toggle-team'); emit('select-nav', TEAM_NAV.key)"
        >
          <template #children>
            <li v-for="team in TEAMS" :key="team.id">
              <button
                type="button"
                class="nav-item w-full pl-[34px] text-left text-[13px]"
                @click="emit('select-nav', TEAM_NAV.key)"
              >
                <span
                  class="flex h-[18px] w-[18px] flex-none items-center justify-center rounded-[4px] bg-avatar text-[10px] text-ink"
                  >{{ team.initial }}</span
                >
                <span class="truncate">{{ team.name }}</span>
              </button>
            </li>
          </template>
        </SideGroup>
      </ul>
    </nav>

    <MemberPromo :visible="promoVisible" @dismiss="emit('dismiss-promo')" />

    <div class="flex flex-none items-center gap-1 px-2 pb-3">
      <button type="button" class="nav-item flex-1 text-left">
        <Icon name="dots" />
        更多
      </button>
      <ThemeToggle :mode="mode" @toggle="toggleTheme" />
    </div>
  </aside>
</template>
