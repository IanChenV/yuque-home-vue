import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import FavoriteView from '@/views/FavoriteView.vue'

describe('FavoriteView', () => {
  it('默认展示全部收藏（7 条）并按时间倒序', () => {
    const wrapper = mount(FavoriteView)
    const rows = wrapper.findAll('.doc-row')

    expect(wrapper.get('h1').text()).toBe('收藏')
    expect(rows).toHaveLength(7)
    expect(rows[0].text()).toContain('陪诊下单链路改版 PRD')
    expect(rows[rows.length - 1].text()).toContain('陪诊服务协作小组')
  })

  it('切到「电子表格」只保留表格类收藏', async () => {
    const wrapper = mount(FavoriteView)

    await wrapper.findAll('[role="tab"]')[2].trigger('click')

    expect(wrapper.findAll('.doc-row')).toHaveLength(1)
    expect(wrapper.text()).toContain('2026 团队预算表')
  })

  it('切到「Board」只保留 Board 收藏，标签共 7 个', async () => {
    const wrapper = mount(FavoriteView)
    const tabs = wrapper.findAll('[role="tab"]')

    await tabs[3].trigger('click')

    expect(wrapper.text()).toContain('竞品功能盘点 Board')
    expect(tabs).toHaveLength(7)
  })
})
