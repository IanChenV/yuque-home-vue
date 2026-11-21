import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import DocTabs from '@/components/workspace/DocTabs.vue'

const LABELS = ['编辑过', '浏览过', '我点赞的', '我评论过']

describe('DocTabs', () => {
  it('按顺序渲染四个标签，仅当前项带选中样式', () => {
    const wrapper = mount(DocTabs, { props: { active: 'edited' } })
    const buttons = wrapper.findAll('button')

    expect(buttons.map((btn) => btn.text())).toEqual(LABELS)
    expect(buttons[0].classes()).toContain('tab-btn--active')
    expect(buttons[1].classes()).not.toContain('tab-btn--active')
    expect(buttons[0].attributes('aria-selected')).toBe('true')
  })

  it('点击其他标签派发对应 key', async () => {
    const wrapper = mount(DocTabs, { props: { active: 'edited' } })

    await wrapper.findAll('button')[2].trigger('click')

    expect(wrapper.emitted('select')?.[0]).toEqual(['liked'])
  })

  it('active 变化后高亮随之移动（选中态由父级单点持有）', async () => {
    const wrapper = mount(DocTabs, { props: { active: 'edited' } })

    await wrapper.setProps({ active: 'commented' })

    const buttons = wrapper.findAll('button')
    expect(buttons[3].classes()).toContain('tab-btn--active')
    expect(buttons[0].classes()).not.toContain('tab-btn--active')
  })

  it('容器具备 tablist 语义', () => {
    const wrapper = mount(DocTabs, { props: { active: 'edited' } })

    expect(wrapper.find('[role="tablist"]').exists()).toBe(true)
    expect(wrapper.findAll('[role="tab"]')).toHaveLength(4)
  })
})
