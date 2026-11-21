import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import PageHeader from '@/components/common/PageHeader.vue'

describe('PageHeader', () => {
  it('渲染标题与描述，无描述时不渲染段落', () => {
    const withDesc = mount(PageHeader, {
      props: { title: '收藏', description: '好内容值得再看一遍' }
    })
    expect(withDesc.get('h1').text()).toBe('收藏')
    expect(withDesc.text()).toContain('好内容值得再看一遍')

    const bare = mount(PageHeader, { props: { title: '开始' } })
    expect(bare.find('p').exists()).toBe(false)
  })

  it('actions 插槽透出操作按钮', () => {
    const wrapper = mount(PageHeader, {
      props: { title: '小记' },
      slots: { actions: '<button type="button">新建小记</button>' }
    })

    expect(wrapper.find('button').text()).toBe('新建小记')
  })
})
