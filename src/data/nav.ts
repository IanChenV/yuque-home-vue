import type { KnowledgeBaseChild, NavItem } from '@/types'

/**
 * 主导航项。key 与路由 name 一一对应（见 src/router），
 * 侧边栏点击后由 App 统一 push 到同名路由。
 */
export const MAIN_NAV: NavItem[] = [
  { key: 'start', label: '开始', icon: 'clock' },
  { key: 'board', label: 'Board', icon: 'board' },
  { key: 'note', label: '小记', icon: 'note' },
  { key: 'favorite', label: '收藏', icon: 'star' },
  { key: 'explore', label: '逛逛', icon: 'grid' }
]

/** 「知识库」分组节点：点击跳转知识库列表页并折叠树 */
export const KNOWLEDGE_NAV: NavItem = {
  key: 'knowledge',
  label: '知识库',
  icon: 'knowledge'
}

/** 「小组」分组节点：点击跳转小组列表页 */
export const TEAM_NAV: NavItem = {
  key: 'team',
  label: '小组',
  icon: 'team'
}

/** 知识库展开后的子项 */
export const KNOWLEDGE_CHILDREN: KnowledgeBaseChild[] = [
  { label: '默认知识库', locked: true }
]
