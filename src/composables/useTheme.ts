import { computed, ref, watch } from 'vue'

export type ThemeMode = 'light' | 'dark'

const STORAGE_KEY = 'yuque-theme'
const DARK_CLASS = 'dark'

/** 跟随系统首选项；matchMedia 在部分环境不可用，降级为亮色 */
function prefersDark(): boolean {
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
}

/** 读取上次选择。隐私模式 / 禁用存储下 localStorage 会抛错，必须兜住 */
function readStored(): ThemeMode | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    return null
  }
}

function writeStored(mode: ThemeMode): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, mode)
  } catch {
    // 存储不可用时静默降级：本次会话内主题仍然生效
  }
}

/**
 * 主题状态源。
 * 只在 <html> 上切 class 与 color-scheme，组件不感知主题——
 * 所有配色由 tokens.css 的同名 CSS 变量在 .dark 下覆盖。
 */
export function useTheme() {
  const mode = ref<ThemeMode>(readStored() ?? (prefersDark() ? 'dark' : 'light'))

  const isDark = computed(() => mode.value === 'dark')

  watch(
    mode,
    (next) => {
      document.documentElement.classList.toggle(DARK_CLASS, next === 'dark')
      document.documentElement.style.colorScheme = next
      writeStored(next)
    },
    { immediate: true }
  )

  function toggle(): void {
    mode.value = mode.value === 'dark' ? 'light' : 'dark'
  }

  function set(next: ThemeMode): void {
    mode.value = next
  }

  return { mode, isDark, toggle, set }
}
