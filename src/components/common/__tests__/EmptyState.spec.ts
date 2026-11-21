import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import EmptyState from '@/components/common/EmptyState.vue'

describe('EmptyState', () => {
  it('渲染提示文案，默认使用灯泡图标', () => {
    const wrapper = mount(EmptyState, { props: { text: '暂无记录' } })

    expect(wrapper.text()).toContain('暂无记录')
    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('可指定其他图标名', () => {
    const wrapper = mount(EmptyState, { props: { text: '空空如也', icon: 'star' } })

    expect(wrapper.text()).toContain('空空如也')
  })
})
