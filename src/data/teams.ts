import type { TeamModel } from '@/types'

export const TEAMS: TeamModel[] = [
  {
    id: 'team-hospital',
    name: '陪诊服务协作小组',
    initial: '陪',
    description: '陪诊师排班、话术模板与客户回访记录的协作空间。',
    members: 12,
    books: 8,
    updatedAt: '03-13 16:20'
  },
  {
    id: 'team-product',
    name: '产品部',
    initial: '产',
    description: 'PRD 评审、版本计划与上线复盘。',
    members: 26,
    books: 14,
    updatedAt: '03-12 11:08'
  },
  {
    id: 'team-study',
    name: '读书会',
    initial: '读',
    description: '每月共读一本书，笔记沉淀在这里。',
    members: 6,
    books: 3,
    updatedAt: '02-24 22:15'
  }
]
