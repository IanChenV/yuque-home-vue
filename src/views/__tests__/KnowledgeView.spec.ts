import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import KnowledgeView from '@/views/KnowledgeView.vue'

describe('KnowledgeView', () => {
  it('默认展示「我的知识库」4 张卡片', () => {
    const wrapper = mount(KnowledgeView)

    expect(wrapper.get('h1').text()).toBe('知识库')
    expect(wrapper.findAll('li.func-card')).toHaveLength(4)
    expect(wrapper.text()).toContain('新建知识库')
  })

  it('置顶库显示置顶标签，隐私库显示锁图标', () => {
    const wrapper = mount(KnowledgeView)
    const first = wrapper.findAll('li.func-card')[0]

    expect(first.text()).toContain('置顶')
    expect(first.text()).toContain('隐私')
  })

  it('切到「加入的知识库」后列表换源', async () => {
    const wrapper = mount(KnowledgeView)

    await wrapper.findAll('[role="tab"]')[1].trigger('click')

    expect(wrapper.findAll('li.func-card')).toHaveLength(2)
    expect(wrapper.text()).toContain('团队周报')
  })
})
