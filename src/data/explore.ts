import type { ExplorePost, TabItem } from '@/types'

/** 逛逛频道，「推荐」为默认展示全部 */
export const EXPLORE_CATEGORIES: TabItem[] = [
  { key: 'all', label: '推荐' },
  { key: 'product', label: '产品' },
  { key: 'tech', label: '技术' },
  { key: 'design', label: '设计' },
  { key: 'read', label: '阅读' },
  { key: 'life', label: '生活' }
]

export const DEFAULT_EXPLORE_CATEGORY = 'all'

export const EXPLORE_POSTS: ExplorePost[] = [
  {
    id: 'post-ai-workflow',
    title: '用知识库 + AI 搭建个人工作流的一年实践',
    summary: '把散落的会议记录、灵感与文档收进知识库之后，AI 检索才真正开始产生复利。',
    author: '阿象',
    bookName: '个人知识管理',
    category: 'product',
    likes: 1286,
    comments: 94
  },
  {
    id: 'post-doc-api',
    title: '写给前端的新版文档 API 迁移指南',
    summary: '从旧版接口切换到新版时会踩的七个坑，以及对应的兼容方案。',
    author: 'Lino',
    bookName: '研发周报',
    category: 'tech',
    likes: 832,
    comments: 47
  },
  {
    id: 'post-template-design',
    title: '模板也是一种设计语言：怎样写出想让人用的模板',
    summary: '好的模板不是漂亮的空文档，而是把作者的思考路径完整地交给下一个人。',
    author: '小毛',
    bookName: '设计体系笔记',
    category: 'design',
    likes: 651,
    comments: 38
  },
  {
    id: 'post-reading-list',
    title: '陪诊行业观察：被照顾与被记录的平衡',
    summary: '两个月跟随陪诊师跑医院，看到的服务细节与文档化习惯。',
    author: 'Yuki',
    bookName: '田野调查',
    category: 'read',
    likes: 478,
    comments: 65
  },
  {
    id: 'post-life-note',
    title: '把生活琐事交给小记：我的周末整理法',
    summary: '购物清单、待办和灵感先进小记，每周日花十分钟归档到对应知识库。',
    author: '南瓜',
    bookName: '生活系统',
    category: 'life',
    likes: 355,
    comments: 21
  },
  {
    id: 'post-board-intro',
    title: '语雀 Board 内测报告：知识库的智能整理长什么样',
    summary: '选取了三个真实知识库做采集与分析，整理结果可以直接生成文档大纲。',
    author: 'Ben',
    bookName: '官方实验室',
    category: 'product',
    likes: 2049,
    comments: 173
  }
]
