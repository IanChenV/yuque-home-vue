import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import MemberPromo from '@/components/sidebar/MemberPromo.vue'

describe('MemberPromo', () => {
  it('visible 为 true 时渲染文案与两个按钮', () => {
    const wrapper = mount(MemberPromo, { props: { visible: true } })

    expect(wrapper.text()).toContain('更大附件、更多流量、更多权益等')
    expect(wrapper.findAll('button')).toHaveLength(3)
    expect(wrapper.text()).toContain('购买会员')
    expect(wrapper.text()).toContain('免费领会员')
  })

  it('visible 为 false 时整卡不渲染', () => {
    const wrapper = mount(MemberPromo, { props: { visible: false } })

    // v-if 为假时根节点只剩注释占位
    expect(wrapper.find('[aria-label="关闭会员提示"]').exists()).toBe(false)
    expect(wrapper.text()).toBe('')
  })

  it('点击关闭按钮派发 dismiss 事件', async () => {
    const wrapper = mount(MemberPromo, { props: { visible: true } })

    await wrapper.get('[aria-label="关闭会员提示"]').trigger('click')

    expect(wrapper.emitted('dismiss')).toHaveLength(1)
  })
})
