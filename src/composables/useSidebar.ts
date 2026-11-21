import { ref } from 'vue'

/**
 * 侧边栏的本地 UI 状态：会员促销卡与两个树分组的折叠态。
 * 页面选中态已交给路由，这里不再维护 activeNav。
 */
export function useSidebar() {
  const promoVisible = ref<boolean>(true)
  const knowledgeExpanded = ref<boolean>(true)
  const teamExpanded = ref<boolean>(false)

  function dismissPromo(): void {
    promoVisible.value = false
  }

  function toggleKnowledge(): void {
    knowledgeExpanded.value = !knowledgeExpanded.value
  }

  function toggleTeam(): void {
    teamExpanded.value = !teamExpanded.value
  }

  return {
    promoVisible,
    knowledgeExpanded,
    teamExpanded,
    dismissPromo,
    toggleKnowledge,
    toggleTeam
  }
}
