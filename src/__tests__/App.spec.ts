import { describe, expect, it } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import type { VueWrapper } from '@vue/test-utils'
import App from '@/App.vue'
import { createAppRouter, createMemoryHistory } from '@/router'

/**
 * 集成测试统一走真实的 memory history 路由：
 * 侧边栏高亮、页面切换都由路由驱动，与浏览器行为一致且用例间互不污染。
 */
async function mountApp(path = '/start'): Promise<VueWrapper> {
  const router = createAppRouter(createMemoryHistory())
  const wrapper = mount(App, { global: { plugins: [router] } })

  await router.push(path)
  await router.isReady()
  return wrapper
}

describe('应用骨架（路由集成）', () => {
  it('默认落在「开始」页：侧边栏 + 主内容区', async () => {
    const wrapper = await mountApp()

    expect(wrapper.find('aside').exists()).toBe(true)
    expect(wrapper.find('main').exists()).toBe(true)
    expect(wrapper.get('h1').text()).toBe('开始')
    expect(wrapper.get('h2').text()).toBe('文档')
  })

  it('功能卡片 6 张，其中两张带下拉箭头与上线标签', async () => {
    const wrapper = await mountApp()
    const cards = wrapper.findAll('.func-card')

    expect(cards).toHaveLength(6)
    expect(cards[0].text()).toContain('新建文档')
    expect(cards[5].text()).toContain('语雀Board')
    expect(cards[5].text()).toContain('即将上线')
  })

  it('文档列表默认渲染两条记录，路径与时间齐全', async () => {
    const wrapper = await mountApp()
    const rows = wrapper.findAll('.doc-row')

    expect(rows).toHaveLength(2)
    expect(rows[0].text()).toContain('无标题文档')
    expect(rows[0].text()).toContain('广州陪诊专号 / 默认知识库')
    expect(rows[1].text()).toContain('1 分钟玩转语雀文档')
  })

  it('点击标签页切换选中态并驱动列表数据变化', async () => {
    const wrapper = await mountApp()

    await wrapper.findAll('[role="tab"]')[1].trigger('click')

    expect(wrapper.findAll('[role="tab"]')[1].classes()).toContain('tab-btn--active')
    expect(wrapper.text()).toContain('暂无记录')
  })

  it('点击侧边栏 Board 后路由与选中态同步迁移', async () => {
    const wrapper = await mountApp()

    await wrapper.findAll('nav[aria-label="主导航"] .nav-item')[1].trigger('click')
    await flushPromises()

    expect(wrapper.find('.nav-item--active').text()).toContain('Board')
    expect(wrapper.get('h1').text()).toBe('Board')
    expect(wrapper.text()).toContain('什么是语雀 Board')
  })

  it('知识库分组点击后跳转知识库页并折叠子项', async () => {
    const wrapper = await mountApp()
    const toggles = wrapper.findAll('[aria-expanded]')
    const knowledgeToggle = toggles[0]

    expect(knowledgeToggle.attributes('aria-expanded')).toBe('true')
    expect(wrapper.text()).toContain('默认知识库')

    await knowledgeToggle.trigger('click')
    await flushPromises()

    expect(wrapper.get('h1').text()).toBe('知识库')
    expect(knowledgeToggle.attributes('aria-expanded')).toBe('false')
    expect(wrapper.findAll('.nav-item--active')).toHaveLength(1)
  })

  it('小组分组点击后跳转小组页', async () => {
    const wrapper = await mountApp()
    const teamToggle = wrapper.findAll('[aria-expanded]')[1]

    expect(teamToggle.attributes('aria-expanded')).toBe('false')

    await teamToggle.trigger('click')
    await flushPromises()

    expect(wrapper.get('h1').text()).toBe('小组')
    expect(wrapper.text()).toContain('陪诊服务协作小组')
  })

  it('关闭会员促销卡后整卡移除', async () => {
    const wrapper = await mountApp()

    expect(wrapper.text()).toContain('购买会员')

    await wrapper.get('[aria-label="关闭会员提示"]').trigger('click')

    expect(wrapper.text()).not.toContain('购买会员')
    expect(wrapper.text()).not.toContain('更大附件')
  })

  it('「开始」页右下角悬浮区含快速上手与客服入口', async () => {
    const wrapper = await mountApp()

    expect(wrapper.text()).toContain('快速上手')
    expect(wrapper.find('[aria-label="联系客服"]').exists()).toBe(true)
    expect(wrapper.find('[aria-label="反馈"]').exists()).toBe(true)
  })
})
