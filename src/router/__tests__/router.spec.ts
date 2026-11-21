import { describe, expect, it } from 'vitest'
import { createAppRouter, createMemoryHistory, routes } from '@/router'

function build() {
  return createAppRouter(createMemoryHistory())
}

describe('路由表', () => {
  it('除重定向外共 7 个具名页面', () => {
    const named = routes.filter((route) => 'name' in route && route.name)

    expect(named.map((route) => route.name)).toEqual([
      'start',
      'board',
      'note',
      'favorite',
      'explore',
      'knowledge',
      'team'
    ])
  })

  it('根路径重定向到开始页', async () => {
    const router = build()

    await router.push('/')

    expect(router.currentRoute.value.name).toBe('start')
  })

  it('未知路径回退到开始页', async () => {
    const router = build()

    await router.push('/not-a-page')

    expect(router.currentRoute.value.name).toBe('start')
  })

  it('可直接访问各页面路由', async () => {
    const router = build()

    await router.push('/favorite')

    expect(router.currentRoute.value.name).toBe('favorite')
  })
})
