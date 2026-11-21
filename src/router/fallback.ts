import type { Router } from 'vue-router'

/** 与 public/404.html 中约定的 sessionStorage key 保持一致 */
export const SPA_FALLBACK_KEY = 'spa-fallback-path'

/**
 * GitHub Pages 不支持 history 回退：深链接先落到 public/404.html，
 * 由它把目标路径写入 sessionStorage 后回到首页；这里在路由就绪后
 * 读取并恢复导航，随后清除存储，避免刷新时重复恢复。
 */
export async function restoreFallbackPath(router: Router): Promise<void> {
  await router.isReady()
  const saved = window.sessionStorage.getItem(SPA_FALLBACK_KEY)
  window.sessionStorage.removeItem(SPA_FALLBACK_KEY)
  if (!saved) {
    return
  }
  const target = '/' + saved.replace(/^\/+/, '')
  if (router.currentRoute.value.fullPath !== target) {
    await router.replace(target)
  }
}
