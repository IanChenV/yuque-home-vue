import type { FavoriteFilter, FavoriteItem, TabItem } from '@/types'

export const FAVORITE_TABS: TabItem<FavoriteFilter>[] = [
  { key: 'all', label: '全部' },
  { key: 'doc', label: '文档' },
  { key: 'sheet', label: '电子表格' },
  { key: 'board', label: 'Board' },
  { key: 'note', label: '小记' },
  { key: 'knowledge', label: '知识库' },
  { key: 'group', label: '小组' }
]

export const DEFAULT_FAVORITE_FILTER: FavoriteFilter = 'all'

/** 收藏列表按类型分组；空数组的标签页展示空态 */
export const FAVORITES_BY_KIND: Record<FavoriteItem['kind'], FavoriteItem[]> = {
  doc: [
    {
      id: 'fav-prd',
      title: '陪诊下单链路改版 PRD',
      kind: 'doc',
      icon: 'doc',
      source: '广州陪诊专号 / 产品文档',
      folder: '工作参考',
      favoritedAt: '03-12'
    },
    {
      id: 'fav-markdown',
      title: 'Markdown 排版速查表',
      kind: 'doc',
      icon: 'doc',
      source: '语雀帮助 / 使用指南',
      favoritedAt: '03-05'
    }
  ],
  sheet: [
    {
      id: 'fav-budget',
      title: '2026 团队预算表',
      kind: 'sheet',
      icon: 'sheet',
      source: '行政事务 / 财务表格',
      folder: '财务',
      favoritedAt: '03-08'
    }
  ],
  board: [
    {
      id: 'fav-competitor',
      title: '竞品功能盘点 Board',
      kind: 'board',
      icon: 'board',
      source: '来自知识库：产品文档',
      favoritedAt: '03-10'
    }
  ],
  note: [
    {
      id: 'fav-quote',
      title: '「把重复的事情交给模板，把思考的事情留给自己。」',
      kind: 'note',
      icon: 'note',
      source: '我的空间 / 灵感收藏',
      favoritedAt: '03-09'
    }
  ],
  knowledge: [
    {
      id: 'fav-default-book',
      title: '默认知识库',
      kind: 'knowledge',
      icon: 'knowledge',
      source: '广州陪诊专号',
      favoritedAt: '02-27'
    }
  ],
  group: [
    {
      id: 'fav-hospital-group',
      title: '陪诊服务协作小组',
      kind: 'group',
      icon: 'team',
      source: '12 名成员 · 8 个知识库',
      favoritedAt: '02-20'
    }
  ]
}

/** 「全部」标签页按收藏时间倒序合并各类型 */
export function flattenFavorites(): FavoriteItem[] {
  const all: FavoriteItem[] = []
  for (const kind of Object.keys(FAVORITES_BY_KIND) as FavoriteItem['kind'][]) {
    all.push(...FAVORITES_BY_KIND[kind])
  }
  return all.sort((a, b) => b.favoritedAt.localeCompare(a.favoritedAt))
}
