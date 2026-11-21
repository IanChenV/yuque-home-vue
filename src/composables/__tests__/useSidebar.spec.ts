import { describe, expect, it } from 'vitest'
import { useSidebar } from '@/composables/useSidebar'

describe('useSidebar', () => {
  it('初始展示会员提示，知识库展开、小组收起', () => {
    const sidebar = useSidebar()

    expect(sidebar.promoVisible.value).toBe(true)
    expect(sidebar.knowledgeExpanded.value).toBe(true)
    expect(sidebar.teamExpanded.value).toBe(false)
  })

  it('关闭会员提示后不再恢复', () => {
    const sidebar = useSidebar()

    sidebar.dismissPromo()

    expect(sidebar.promoVisible.value).toBe(false)
  })

  it('知识库分组可反复折叠展开', () => {
    const sidebar = useSidebar()

    sidebar.toggleKnowledge()
    expect(sidebar.knowledgeExpanded.value).toBe(false)

    sidebar.toggleKnowledge()
    expect(sidebar.knowledgeExpanded.value).toBe(true)
  })

  it('小组分组可反复折叠展开', () => {
    const sidebar = useSidebar()

    sidebar.toggleTeam()
    expect(sidebar.teamExpanded.value).toBe(true)

    sidebar.toggleTeam()
    expect(sidebar.teamExpanded.value).toBe(false)
  })
})
