import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import SideGroup from '@/components/sidebar/SideGroup.vue'
import { KNOWLEDGE_NAV } from '@/data/nav'

function mountGroup(expanded = true, active = false) {
  return mount(SideGroup, {
    props: { nav: KNOWLEDGE_NAV, expanded, active },
    slots: { children: '<li class="child">默认知识库</li>' }
  })
}

describe('SideGroup', () => {
  it('渲染分组标题与 aria-expanded', () => {
    const wrapper = mountGroup()

    expect(wrapper.text()).toContain('知识库')
    expect(wrapper.get('[aria-expanded]').attributes('aria-expanded')).toBe('true')
  })

  it('expanded 为 false 时子项隐藏', () => {
    const wrapper = mountGroup(false)

    expect(wrapper.get('ul').attributes('style')).toContain('display: none')
  })

  it('active 时头部按钮带选中态样式', () => {
    const wrapper = mountGroup(true, true)

    expect(wrapper.get('button').classes()).toContain('nav-item--active')
  })

  it('点击头部派发一次 click', async () => {
    const wrapper = mountGroup()

    await wrapper.get('button').trigger('click')

    expect(wrapper.emitted('click')).toHaveLength(1)
  })
})
