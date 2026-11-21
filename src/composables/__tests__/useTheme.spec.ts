import { beforeEach, describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import { useTheme } from '@/composables/useTheme'

describe('useTheme', () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('toggle 在明暗之间切换并同步 html class', async () => {
    const theme = useTheme()
    const start = theme.mode.value

    theme.toggle()
    await nextTick()

    expect(theme.mode.value).toBe(start === 'dark' ? 'light' : 'dark')
    expect(document.documentElement.classList.contains('dark')).toBe(theme.isDark.value)
  })

  it('set 后写入 localStorage，重建时可恢复', async () => {
    const theme = useTheme()

    theme.set('dark')
    await nextTick()

    expect(window.localStorage.getItem('yuque-theme')).toBe('dark')
    expect(useTheme().mode.value).toBe('dark')
  })
})
