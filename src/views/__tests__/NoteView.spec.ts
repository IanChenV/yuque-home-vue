import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import NoteView from '@/views/NoteView.vue'

describe('NoteView', () => {
  it('默认展示全部 4 条小记与快捷记录入口', () => {
    const wrapper = mount(NoteView)

    expect(wrapper.get('h1').text()).toBe('小记')
    expect(wrapper.findAll('li.func-card')).toHaveLength(4)
    expect(wrapper.find('[aria-label="小记内容"]').exists()).toBe(true)
  })

  it('切到「已收藏」只剩两条收藏小记', async () => {
    const wrapper = mount(NoteView)
    const tabs = wrapper.findAll('[role="tab"]')

    await tabs[2].trigger('click')

    expect(wrapper.findAll('li.func-card')).toHaveLength(2)
    expect(wrapper.text()).toContain('把重复的事情交给模板')
  })

  it('回收站为空时展示空态', async () => {
    const wrapper = mount(NoteView)

    await wrapper.findAll('[role="tab"]')[4].trigger('click')

    expect(wrapper.text()).toContain('该分组下还没有小记')
  })

  it('快捷记录可输入并保存后清空草稿', async () => {
    const wrapper = mount(NoteView)

    await wrapper.get('textarea').setValue('临时灵感')
    await wrapper.get('[aria-label="快捷记录"] .btn-primary').trigger('click')

    expect(wrapper.get('textarea').element.value).toBe('')
  })
})
