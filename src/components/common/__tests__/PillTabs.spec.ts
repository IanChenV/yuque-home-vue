import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import PillTabs from '@/components/common/PillTabs.vue'

const TABS = [
  { key: 'all', label: '全部' },
  { key: 'doc', label: '文档' }
]

describe('PillTabs', () => {
  it('渲染全部标签并高亮当前项', () => {
    const wrapper = mount(PillTabs, { props: { tabs: TABS, active: 'all' } })
    const buttons = wrapper.findAll('button')

    expect(buttons.map((btn) => btn.text())).toEqual(['全部', '文档'])
    expect(buttons[0].classes()).toContain('tab-btn--active')
    expect(buttons[1].classes()).not.toContain('tab-btn--active')
  })

  it('点击派发 select 事件并携带 key', async () => {
    const wrapper = mount(PillTabs, { props: { tabs: TABS, active: 'all' } })

    await wrapper.findAll('button')[1].trigger('click')

    expect(wrapper.emitted('select')?.[0]).toEqual(['doc'])
  })

  it('容器具备 tablist 语义', () => {
    const wrapper = mount(PillTabs, { props: { tabs: TABS, active: 'all' } })

    expect(wrapper.find('[role="tablist"]').exists()).toBe(true)
    expect(wrapper.findAll('[role="tab"]')).toHaveLength(2)
  })
})
