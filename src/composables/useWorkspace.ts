import { computed, ref } from 'vue'
import { DEFAULT_DOC_TAB, DOCS_BY_TAB } from '@/data/documents'
import type { DocItem, DocTabKey } from '@/types'

/**
 * 「开始」页文档区的唯一状态源。
 * 组件只负责渲染与派发意图，选中态、列表派生等逻辑可以脱离 DOM 单测。
 *
 * 不可变性：这里只重新赋值 ref，从不修改 DOCS_BY_TAB 等模块级数据。
 * 侧边栏状态见 useSidebar，页面选中态由路由承担。
 */
export function useWorkspace() {
  const activeTab = ref<DocTabKey>(DEFAULT_DOC_TAB)

  /** 当前标签页对应的文档列表 */
  const docs = computed<DocItem[]>(() => DOCS_BY_TAB[activeTab.value])

  const isActiveTab = (key: DocTabKey): boolean => activeTab.value === key

  function selectTab(key: DocTabKey): void {
    activeTab.value = key
  }

  return {
    activeTab,
    docs,
    isActiveTab,
    selectTab
  }
}
