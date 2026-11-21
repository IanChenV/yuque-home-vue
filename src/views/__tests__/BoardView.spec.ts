import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import BoardView from '@/views/BoardView.vue'

describe('BoardView', () => {
  it('渲染标题、三步引导与新建按钮', () => {
    const wrapper = mount(BoardView)

    expect(wrapper.get('h1').text()).toBe('Board')
    expect(wrapper.text()).toContain('选择要分析的知识库')
    expect(wrapper.text()).toContain('生成大纲、看板与洞察')
    expect(wrapper.text()).toContain('新建 Board')
  })

  it('渲染两个 Board 卡片并区分状态', () => {
    const wrapper = mount(BoardView)
    const cards = wrapper.findAll('li.func-card')

    expect(cards).toHaveLength(2)
    expect(cards[0].text()).toContain('已生成')
    expect(cards[1].text()).toContain('分析中')
    expect(cards[0].text()).toContain('来自知识库：产品文档')
  })
})
