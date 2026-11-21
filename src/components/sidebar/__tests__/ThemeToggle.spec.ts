import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ThemeToggle from '@/components/sidebar/ThemeToggle.vue'

describe('ThemeToggle', () => {
  it('亮色下提示切换到深色，点击派发 toggle', async () => {
    const wrapper = mount(ThemeToggle, { props: { mode: 'light' } })
    const button = wrapper.get('button')

    expect(button.attributes('aria-label')).toBe('切换到深色主题')

    await button.trigger('click')

    expect(wrapper.emitted('toggle')).toHaveLength(1)
  })

  it('暗色下文案反转', () => {
    const wrapper = mount(ThemeToggle, { props: { mode: 'dark' } })

    expect(wrapper.get('button').attributes('aria-label')).toBe('切换到亮色主题')
  })
})
