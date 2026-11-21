import type { IconName } from '@/types'

/**
 * 图标的结构化描述。
 * 用数据 + 分支渲染代替 v-html 注入字符串，避免任何 HTML 注入面，
 * 同时让 vue-tsc 能对字段做类型校验。
 *
 * 约定：未显式给出的 stroke / fill 继承 <svg> 根元素（currentColor / none），
 * 彩色图标显式写 stroke: 'none'。色值走 CSS 变量，与 Tailwind 主题同源。
 */
export interface IconShape {
  t: 'path' | 'circle' | 'rect'
  /** path 专用 */
  d?: string
  /** circle 专用 */
  cx?: number
  cy?: number
  r?: number
  /** rect 专用 */
  x?: number
  y?: number
  w?: number
  h?: number
  rx?: number
  fill?: string
  stroke?: string
  strokeWidth?: number
  opacity?: number
}

const BRAND = 'var(--color-brand)'
const DOC_BLUE = 'var(--color-doc)'
/** 叠在彩色底上的前景（白），两套主题下都保持白色 */
const ON_COLOR = 'var(--color-icon-on)'
/** 语雀 Board 黑底白字标识，暗色主题下整体反转 */
const MARK_BG = 'var(--color-mark-bg)'
const MARK_FG = 'var(--color-mark-fg)'
const NONE = 'none'

/** 线性图标：1.5px 描边、round 端点，尺寸由调用方传入 */
export const ICON_SHAPES: Record<IconName, IconShape[]> = {
  bell: [
    { t: 'path', d: 'M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9' },
    { t: 'path', d: 'M13.7 21a2 2 0 0 1-3.4 0' }
  ],
  search: [
    { t: 'circle', cx: 11, cy: 11, r: 7 },
    { t: 'path', d: 'm20 20-3.5-3.5' }
  ],
  plus: [{ t: 'path', d: 'M12 5v14M5 12h14' }],
  clock: [
    { t: 'circle', cx: 12, cy: 12, r: 9 },
    { t: 'path', d: 'M12 7v5l3 2' }
  ],
  board: [
    { t: 'rect', x: 3, y: 4, w: 18, h: 14, rx: 2 },
    { t: 'path', d: 'M8 18v2M16 18v2M9 9h6M9 12.5h4' }
  ],
  note: [
    { t: 'path', d: 'M4 20c1.5-4 4-6.5 8-8-3 3.5-5 5.5-8 8Z' },
    { t: 'path', d: 'M14.5 5.5 18.5 9.5 9 19H5v-4l9.5-9.5Z' }
  ],
  star: [
    {
      t: 'path',
      d: 'm12 4 2.5 5 5.5.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9 5.5-.8L12 4Z'
    }
  ],
  grid: [
    { t: 'rect', x: 4, y: 4, w: 6.5, h: 6.5, rx: 1.5 },
    { t: 'rect', x: 13.5, y: 4, w: 6.5, h: 6.5, rx: 1.5 },
    { t: 'rect', x: 4, y: 13.5, w: 6.5, h: 6.5, rx: 1.5 },
    { t: 'rect', x: 13.5, y: 13.5, w: 6.5, h: 6.5, rx: 1.5 }
  ],
  knowledge: [
    { t: 'path', d: 'm6 9 6-5 6 5v10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9Z' },
    { t: 'path', d: 'M9 20v-6h6v6' }
  ],
  chevronRight: [{ t: 'path', d: 'm9 6 6 6-6 6' }],
  chevronDown: [{ t: 'path', d: 'm6 9 6 6 6-6' }],
  lock: [
    { t: 'rect', x: 5, y: 11, w: 14, h: 9, rx: 2 },
    { t: 'path', d: 'M8 11V8a4 4 0 0 1 8 0v3' }
  ],
  close: [{ t: 'path', d: 'M6 6l12 12M18 6 6 18' }],
  bulb: [
    { t: 'path', d: 'M9 18h6M10 21h4' },
    {
      t: 'path',
      d: 'M12 3a6 6 0 0 0-3.5 10.9c.6.5.9 1.2 1 1.6h5c.1-.4.4-1.1 1-1.6A6 6 0 0 0 12 3Z'
    }
  ],
  dots: [
    { t: 'circle', cx: 12, cy: 12, r: 9 },
    { t: 'path', d: 'M8.5 12h.01M12 12h.01M15.5 12h.01' }
  ],
  headset: [
    { t: 'path', d: 'M4 13v-1a8 8 0 0 1 16 0v1' },
    { t: 'rect', x: 3, y: 13, w: 4, h: 6, rx: 2 },
    { t: 'rect', x: 17, y: 13, w: 4, h: 6, rx: 2 },
    { t: 'path', d: 'M19 19v.5a2.5 2.5 0 0 1-2.5 2.5H14' }
  ],
  smile: [
    { t: 'circle', cx: 12, cy: 12, r: 9 },
    { t: 'path', d: 'M8.5 14c.8 1.2 2 1.8 3.5 1.8s2.7-.6 3.5-1.8' },
    { t: 'path', d: 'M9 9.5h.01M15 9.5h.01' }
  ],
  sun: [
    { t: 'circle', cx: 12, cy: 12, r: 4 },
    { t: 'path', d: 'M12 2v2M12 20v2M4.9 4.9l1.5 1.5M17.6 17.6l1.5 1.5M2 12h2M20 12h2M4.9 19.1l1.5-1.5M17.6 6.4l1.5-1.5' }
  ],
  moon: [
    { t: 'path', d: 'M20.5 13.3A8.5 8.5 0 1 1 10.7 3.5a6.8 6.8 0 0 0 9.8 9.8Z' }
  ],

  /* ---------- 以下为非线性 / 彩色图标 ---------- */

  /** 品牌 Logo：绿色圆角方块由 BrandBar 的容器提供，这里只画白色叶子 */
  logoLeaf: [
    { t: 'path', d: 'M5 19c0-7 5-12 12-14-1 8-5 13-12 14Z', stroke: ON_COLOR },
    { t: 'path', d: 'M5 19c2-4 5-7 9-9', stroke: ON_COLOR }
  ],
  /** 列表项文档图标：蓝色圆角矩形 + 白色文字线 */
  doc: [
    { t: 'rect', x: 4, y: 3, w: 16, h: 18, rx: 2.5, fill: DOC_BLUE, stroke: DOC_BLUE },
    { t: 'path', d: 'M8 8.5h8M8 12.5h5', stroke: ON_COLOR, strokeWidth: 1.6 }
  ],
  /** 新建文档：文档轮廓 + 绿色加号角标 */
  docAdd: [
    { t: 'path', d: 'M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z' },
    { t: 'path', d: 'M14 3v5h5M9 13h4M9 16.5h3' },
    { t: 'circle', cx: 18.5, cy: 17.5, r: 3.5, fill: BRAND, stroke: BRAND },
    { t: 'path', d: 'M18.5 15.9v3.2M16.9 17.5h3.2', stroke: ON_COLOR, strokeWidth: 1.3 }
  ],
  /** 新建知识库：绿色书本 + 绿色加号角标 */
  knowledgeAdd: [
    { t: 'path', d: 'M5 4.5h9a2 2 0 0 1 2 2V20H7a2 2 0 0 1-2-2V4.5Z', stroke: BRAND },
    { t: 'path', d: 'M16 8.5h3', stroke: BRAND },
    { t: 'circle', cx: 18, cy: 5.5, r: 3, fill: BRAND, stroke: BRAND },
    { t: 'path', d: 'M18 4v3M16.5 5.5h3', stroke: ON_COLOR, strokeWidth: 1.3 }
  ],
  /** 模板中心：三色漏斗 */
  template: [
    { t: 'path', d: 'M4 5h16l-6 8v6l-4-2v-4L4 5Z', fill: '#f5a623', stroke: NONE },
    { t: 'path', d: 'M4 5h16l-6 8H9L4 5Z', fill: DOC_BLUE, stroke: NONE },
    { t: 'path', d: 'M12 13l2-3 6 8H8l4-5Z', fill: '#e8564f', stroke: NONE, opacity: 0.85 }
  ],
  /** 百宝箱：三面立方 */
  cube: [
    { t: 'path', d: 'M12 3 20 7.2v9.6L12 21l-8-4.2V7.2L12 3Z', fill: '#7b61ff', stroke: NONE },
    { t: 'path', d: 'M12 3 20 7.2 12 11.4 4 7.2 12 3Z', fill: '#35c4f0', stroke: NONE },
    { t: 'path', d: 'M12 11.4 20 7.2v9.6L12 21v-9.6Z', fill: '#2fa36b', stroke: NONE }
  ],
  /** AI 对话：蓝色鲸鱼 */
  whale: [
    {
      t: 'path',
      d: 'M3 13c3.5 0 6-1.6 8-4.2 2.4 3.2 6 4.6 10 4.2-1.4 4.4-5.2 7-9 7-4.6 0-8.2-3-9-7Z',
      fill: DOC_BLUE,
      stroke: NONE
    },
    {
      t: 'path',
      d: 'M11 8.8c1.2-2.4 3.4-4 6-4.4-.4 2.4-1.8 4.2-3.8 5.2',
      fill: '#7fb0f8',
      stroke: NONE
    },
    { t: 'circle', cx: 7.5, cy: 13.5, r: 1, fill: ON_COLOR, stroke: NONE }
  ],
  team: [
    { t: 'circle', cx: 9, cy: 8, r: 3.2 },
    { t: 'path', d: 'M3.5 19a5.5 5.5 0 0 1 11 0' },
    { t: 'circle', cx: 17, cy: 9.2, r: 2.6 },
    { t: 'path', d: 'M16 14.6a4.8 4.8 0 0 1 5 4.4' }
  ],
  sheet: [
    { t: 'rect', x: 3, y: 4, w: 18, h: 16, rx: 2 },
    { t: 'path', d: 'M3 9.5h18M9.5 9.5V20' }
  ],
  globe: [
    { t: 'circle', cx: 12, cy: 12, r: 9 },
    { t: 'path', d: 'M3.5 9h17M3.5 15h17' },
    { t: 'path', d: 'M12 3c2.5 2.4 3.8 5.5 3.8 9S14.5 18.6 12 21c-2.5-2.4-3.8-5.5-3.8-9S9.5 5.4 12 3Z' }
  ],
  heart: [
    {
      t: 'path',
      d: 'M20.8 5.6a5.4 5.4 0 0 0-7.7 0L12 6.7l-1.1-1.1a5.4 5.4 0 1 0-7.7 7.7l1.1 1L12 21l7.7-6.7 1.1-1a5.4 5.4 0 0 0 0-7.7Z'
    }
  ],
  comment: [
    {
      t: 'path',
      d: 'M4.5 4.5h15A1.5 1.5 0 0 1 21 6v8.5a1.5 1.5 0 0 1-1.5 1.5H11l-4.5 4v-4H4.5A1.5 1.5 0 0 1 3 14.5V6a1.5 1.5 0 0 1 1.5-1.5Z'
    }
  ],

  /** 语雀 Board：黑底白字标识，主题切换时由 mark-bg / mark-fg 整体反转 */
  boardMark: [
    { t: 'rect', x: 2, y: 2, w: 20, h: 20, rx: 6, fill: MARK_BG, stroke: NONE },
    { t: 'path', d: 'M7 16c4 1 8-2.5 10.5-8.5', stroke: MARK_FG, strokeWidth: 1.7 },
    { t: 'path', d: 'M8 8.5c3 4.5 6.5 6.5 10 6', stroke: MARK_FG, strokeWidth: 1.7 }
  ]
}
