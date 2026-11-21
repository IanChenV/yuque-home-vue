/**
 * Tailwind 配置
 * 只登记语义色名，真实取值全部在 src/styles/tokens.css 的 CSS 变量里
 * （:root 亮色基线，.dark 覆盖）。因此新增主题只需改变量，组件与配置都不动。
 */
export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        canvas: 'var(--color-canvas)',
        surface: 'var(--color-surface)',
        ink: 'var(--color-ink)',
        sub: 'var(--color-sub)',
        muted: 'var(--color-muted)',
        line: 'var(--color-line)',
        'line-strong': 'var(--color-line-strong)',
        side: 'var(--color-side)',
        'side-line': 'var(--color-side-line)',
        'side-hover': 'var(--color-side-hover)',
        'nav-active': 'var(--color-nav-active)',
        'tab-track': 'var(--color-tab-track)',
        'row-hover': 'var(--color-row-hover)',
        'row-line': 'var(--color-row-line)',
        avatar: 'var(--color-avatar)',
        'avatar-line': 'var(--color-avatar-line)',
        brand: 'var(--color-brand)',
        'brand-hover': 'var(--color-brand-hover)',
        accent: 'var(--color-accent)',
        'accent-line': 'var(--color-accent-line)',
        'promo-bg': 'var(--color-promo-bg)',
        'promo-line': 'var(--color-promo-line)',
        'promo-hover': 'var(--color-promo-hover)',
        'badge-bg': 'var(--color-badge-bg)',
        'badge-1688': 'var(--color-badge-1688)',
        doc: 'var(--color-doc)',
        notify: 'var(--color-notify)'
      },
      borderRadius: {
        card: '12px',
        btn: '8px',
        pill: '20px'
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"PingFang SC"',
          '"Microsoft YaHei"',
          'sans-serif'
        ]
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        float: 'var(--shadow-float)',
        tab: 'var(--shadow-tab)'
      }
    }
  },
  darkMode: 'class',
  plugins: []
}
