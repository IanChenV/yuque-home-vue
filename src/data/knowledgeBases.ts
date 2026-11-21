import type { KnowledgeBaseModel, KnowledgeTabKey, TabItem } from '@/types'

export const KNOWLEDGE_TABS: TabItem<KnowledgeTabKey>[] = [
  { key: 'mine', label: '我的知识库' },
  { key: 'joined', label: '加入的知识库' }
]

export const DEFAULT_KNOWLEDGE_TAB: KnowledgeTabKey = 'mine'

export const KNOWLEDGE_BASES_BY_TAB: Record<KnowledgeTabKey, KnowledgeBaseModel[]> = {
  mine: [
    {
      id: 'kb-default',
      name: '默认知识库',
      description: '随手记的产品笔记与陪诊业务文档都在这里。',
      kind: 'doc',
      docCount: 14,
      privacy: 'private',
      pinned: true,
      updatedAt: '03-13 12:12'
    },
    {
      id: 'kb-ops',
      name: '运营数据',
      description: '周报数据表与月度复盘电子表格。',
      kind: 'sheet',
      docCount: 6,
      privacy: 'private',
      pinned: false,
      updatedAt: '03-10 18:02'
    },
    {
      id: 'kb-design',
      name: '设计规范',
      description: '组件走查记录、配色与排版规范说明。',
      kind: 'doc',
      docCount: 23,
      privacy: 'public',
      pinned: false,
      updatedAt: '03-06 09:41'
    },
    {
      id: 'kb-board',
      name: '竞品白板',
      description: '行业竞品截图与脑图合集。',
      kind: 'board',
      docCount: 5,
      privacy: 'private',
      pinned: false,
      updatedAt: '02-28 21:37'
    }
  ],
  joined: [
    {
      id: 'kb-team-weekly',
      name: '团队周报',
      description: '每周五下班前提交，负责人汇总后同步管理层。',
      kind: 'doc',
      docCount: 48,
      privacy: 'private',
      pinned: true,
      updatedAt: '03-13 20:05'
    },
    {
      id: 'kb-help',
      name: '语雀使用指南',
      description: '从注册到高级玩法的官方文档合集。',
      kind: 'doc',
      docCount: 120,
      privacy: 'public',
      pinned: false,
      updatedAt: '03-01 10:00'
    }
  ]
}
