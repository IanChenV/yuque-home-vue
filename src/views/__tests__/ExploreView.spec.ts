import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ExploreView from '@/views/ExploreView.vue'

describe('ExploreView', () => {
  it('「推荐」频道展示全部 6 篇内容', () => {
    const wrapper = mount(ExploreView)

    expect(wrapper.get('h1').text()).toBe('逛逛')
    expect(wrapper.findAll('li.func-card')).toHaveLength(6)
  })

  it('切换频道只保留对应分类', async () => {
    const wrapper = mount(ExploreView)

    await wrapper.findAll('[role="tab"]')[2].trigger('click')

    expect(wrapper.findAll('li.func-card')).toHaveLength(1)
    expect(wrapper.text()).toContain('新版文档 API 迁移指南')
  })

  it('点赞数超过一千时缩写为 k', () => {
    const wrapper = mount(ExploreView)

    expect(wrapper.text()).toContain('2.0k')
    expect(wrapper.text()).not.toContain('2049')
  })
})
