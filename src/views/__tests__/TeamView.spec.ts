import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import TeamView from '@/views/TeamView.vue'

describe('TeamView', () => {
  it('渲染 3 个小组行，含成员与知识库统计', () => {
    const wrapper = mount(TeamView)
    const rows = wrapper.findAll('.doc-row')

    expect(wrapper.get('h1').text()).toBe('小组')
    expect(rows).toHaveLength(3)
    expect(rows[0].text()).toContain('陪诊服务协作小组')
    expect(rows[0].text()).toContain('12 名成员 · 8 个知识库')
    expect(wrapper.text()).toContain('新建小组')
  })

  it('每行都有访问按钮', () => {
    const wrapper = mount(TeamView)

    expect(wrapper.findAll('button.btn-ghost')).toHaveLength(3)
  })
})
