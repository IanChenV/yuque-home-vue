import { describe, expect, it, beforeEach } from 'vitest'
import { createApp, h } from 'vue'
import { createAppRouter, createMemoryHistory } from '../index'
import { restoreFallbackPath, SPA_FALLBACK_KEY } from '../fallback'

/**
 * router.isReady 依赖安装到应用后才触发的首次导航，
 * 因此这里用最小应用装载路由，与 main.ts 的真实链路一致。
 */
function mountRouter() {
  const router = createAppRouter(createMemoryHistory())
  createApp({ render: () => h('div') }).use(router)
  return router
}

describe('restoreFallbackPath', () => {
  beforeEach(() => {
    window.sessionStorage.clear()
  })

  it('sessionStorage 为空时不发生任何导航', async () => {
    const router = mountRouter()
    await restoreFallbackPath(router)
    expect(router.currentRoute.value.name).toBe('start')
  })

  it('恢复 404.html 暂存的目标路径', async () => {
    window.sessionStorage.setItem(SPA_FALLBACK_KEY, 'note')
    const router = mountRouter()
    await restoreFallbackPath(router)
    expect(router.currentRoute.value.name).toBe('note')
    expect(router.currentRoute.value.fullPath).toBe('/note')
  })

  it('容忍带前导斜杠与查询参数的存储值', async () => {
    window.sessionStorage.setItem(SPA_FALLBACK_KEY, '/explore?from=share')
    const router = mountRouter()
    await restoreFallbackPath(router)
    expect(router.currentRoute.value.name).toBe('explore')
    expect(router.currentRoute.value.query.from).toBe('share')
  })

  it('消费后清除存储，避免刷新时重复恢复', async () => {
    window.sessionStorage.setItem(SPA_FALLBACK_KEY, 'board')
    const router = mountRouter()
    await restoreFallbackPath(router)
    expect(window.sessionStorage.getItem(SPA_FALLBACK_KEY)).toBeNull()
  })

  it('未知路径经 catch-all 回退到 start', async () => {
    window.sessionStorage.setItem(SPA_FALLBACK_KEY, 'not-exist')
    const router = mountRouter()
    await restoreFallbackPath(router)
    expect(router.currentRoute.value.name).toBe('start')
  })
})
