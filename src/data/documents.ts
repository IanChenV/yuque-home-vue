import type { DocItem, DocTab, DocTabKey, FilterMenu } from '@/types'

export const DEFAULT_DOC_TAB: DocTabKey = 'edited'

export const DOC_TABS: DocTab[] = [
  { key: 'edited', label: '编辑过' },
  { key: 'viewed', label: '浏览过' },
  { key: 'liked', label: '我点赞的' },
  { key: 'commented', label: '我评论过' }
]

export const DOC_FILTERS: FilterMenu[] = [
  { key: 'type', label: '类型' },
  { key: 'owner', label: '归属' },
  { key: 'creator', label: '创建者' }
]

/** 列表数据按标签页分组，切换标签即切换数据源（纯前端状态，无后端） */
export const DOCS_BY_TAB: Record<DocTabKey, DocItem[]> = {
  edited: [
    {
      id: 'doc-untitled',
      title: '无标题文档',
      path: '广州陪诊专号 / 默认知识库',
      updatedAt: '03-13 12:12'
    },
    {
      id: 'doc-onboarding',
      title: '1 分钟玩转语雀文档',
      leadingIcon: 'bulb',
      path: '广州陪诊专号 / 默认知识库',
      updatedAt: '03-02 20:44'
    }
  ],
  viewed: [],
  liked: [],
  commented: []
}
