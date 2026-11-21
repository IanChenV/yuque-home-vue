import { describe, expect, it } from 'vitest'
import { DOCS_BY_TAB } from '@/data/documents'
import { useWorkspace } from '@/composables/useWorkspace'

describe('useWorkspace', () => {
  it('默认选中「编辑过」', () => {
    const ws = useWorkspace()

    expect(ws.activeTab.value).toBe('edited')
  })

  it('默认标签页派生出截图中的两条文档', () => {
    const { docs } = useWorkspace()

    expect(docs.value).toHaveLength(2)
    expect(docs.value.map((doc) => doc.title)).toEqual(['无标题文档', '1 分钟玩转语雀文档'])
  })

  it('切换标签页会派生新的列表数据', () => {
    const ws = useWorkspace()

    ws.selectTab('viewed')

    expect(ws.isActiveTab('viewed')).toBe(true)
    expect(ws.isActiveTab('edited')).toBe(false)
    expect(ws.docs.value).toEqual([])
  })

  it('状态切换不会修改模块级数据源', () => {
    const before = structuredClone(DOCS_BY_TAB)
    const ws = useWorkspace()

    ws.selectTab('liked')
    ws.selectTab('edited')

    expect(DOCS_BY_TAB).toEqual(before)
    expect(DOCS_BY_TAB.edited).toHaveLength(2)
  })
})
