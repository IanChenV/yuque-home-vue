import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Icon from '@/components/icons/Icon.vue'
import { ICON_SHAPES } from '@/components/icons/shapes'
import type { IconName } from '@/types'

const NAMES = Object.keys(ICON_SHAPES) as IconName[]

describe('Icon 注册表', () => {
  it('覆盖全部图标且每项至少一个图元', () => {
    expect(NAMES.length).toBeGreaterThanOrEqual(25)
    NAMES.forEach((name) => {
      expect(ICON_SHAPES[name].length, `${name} 缺少图元`).toBeGreaterThan(0)
    })
  })

  it('图元类型只允许 path / circle / rect', () => {
    NAMES.forEach((name) => {
      ICON_SHAPES[name].forEach((shape) => {
        expect(['path', 'circle', 'rect']).toContain(shape.t)
      })
    })
  })
})

describe('Icon 渲染', () => {
  it('按 size 输出 svg 尺寸', () => {
    const wrapper = mount(Icon, { props: { name: 'bell', size: 24 } })
    const svg = wrapper.find('svg')

    expect(svg.attributes('width')).toBe('24')
    expect(svg.attributes('height')).toBe('24')
    expect(svg.attributes('viewBox')).toBe('0 0 24 24')
  })

  it('未指定 color 时描边继承 currentColor', () => {
    const wrapper = mount(Icon, { props: { name: 'search' } })

    expect(wrapper.find('svg').attributes('stroke')).toBe('currentColor')
  })

  it('彩色图标显式关闭描边，避免继承 currentColor', () => {
    const wrapper = mount(Icon, { props: { name: 'cube' } })
    const paths = wrapper.findAll('path')

    expect(paths).toHaveLength(3)
    paths.forEach((path) => expect(path.attributes('stroke')).toBe('none'))
  })

  it('装饰性图标对辅助技术隐藏', () => {
    const wrapper = mount(Icon, { props: { name: 'star' } })

    expect(wrapper.find('svg').attributes('aria-hidden')).toBe('true')
  })
})
