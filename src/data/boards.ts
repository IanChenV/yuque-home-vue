import type { BoardModel } from '@/types'

export const BOARDS: BoardModel[] = [
  {
    id: 'board-competitor',
    title: '竞品功能盘点',
    summary: '采集了 5 个知识库的竞品截图与会议记录，已生成对比大纲。',
    sourceName: '产品文档',
    status: 'ready',
    updatedAt: '03-13 10:26'
  },
  {
    id: 'board-annual',
    title: '年度复盘素材',
    summary: '正在收集周报与数据表中的关键节点，预计稍后完成。',
    sourceName: '运营数据',
    status: 'analyzing',
    updatedAt: '03-12 19:44'
  }
]

/** Board 页面顶部的说明卡文案 */
export const BOARD_INTRO = {
  title: '什么是语雀 Board',
  description: '选择知识库后，Board 会自动采集其中的文档与表格，整理成可视化分析面板，帮助你快速产出大纲与洞察。',
  steps: [
    { key: 'step-1', text: '选择要分析的知识库' },
    { key: 'step-2', text: '自动采集与智能整理' },
    { key: 'step-3', text: '生成大纲、看板与洞察' }
  ]
}
