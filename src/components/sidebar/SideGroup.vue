<script setup lang="ts">
import Icon from '@/components/icons/Icon.vue'
import type { NavItem } from '@/types'

/**
 * 侧边栏树分组（知识库 / 小组共用）：
 * 头部按钮既跳转列表页又切换折叠态，子项由父级通过插槽提供。
 */
defineProps<{
  nav: NavItem
  expanded: boolean
  active: boolean
}>()

const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <li>
    <button
      type="button"
      class="nav-item w-full justify-between text-left"
      :class="{ 'nav-item--active': active }"
      :aria-expanded="expanded"
      @click="emit('click')"
    >
      <span class="flex items-center gap-2.5">
        <Icon :name="nav.icon" />
        {{ nav.label }}
      </span>
      <!-- 参考截图里展开态仍是右向箭头，为保持视觉一致这里不做旋转 -->
      <Icon name="chevronRight" :size="14" :stroke-width="2" class="text-sub" />
    </button>

    <ul v-show="expanded">
      <slot name="children" />
    </ul>
  </li>
</template>
