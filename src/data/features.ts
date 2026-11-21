import type { FeatureCardModel } from '@/types'

/**
 * 「开始」下的 6 张功能卡片。
 * 前 4 张构成第一行，后 2 张在 4 列网格里自然落到第二行并与第一行同宽。
 */
export const FEATURE_CARDS: FeatureCardModel[] = [
  {
    key: 'new-doc',
    title: '新建文档',
    description: '文档、表格、画板、数据表',
    icon: 'docAdd',
    hasCaret: true
  },
  {
    key: 'new-knowledge',
    title: '新建知识库',
    description: '使用知识库整理知识',
    icon: 'knowledgeAdd'
  },
  {
    key: 'template',
    title: '模板中心',
    description: '从模板中获取灵感',
    icon: 'template'
  },
  {
    key: 'tbox',
    title: '百宝箱 TboxClaw',
    description: 'PPT、生图、可视化页面',
    icon: 'cube'
  },
  {
    key: 'ai-doc',
    title: 'AI对话写文档',
    description: '使用Deepseek优质新模型',
    icon: 'whale'
  },
  {
    key: 'yuque-board',
    title: '语雀Board',
    description: '知识库收集整理与智能分析',
    icon: 'boardMark',
    badge: '即将上线'
  }
]
