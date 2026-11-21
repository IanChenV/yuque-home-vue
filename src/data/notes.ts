import type { NoteItem, NoteTab, NoteTabKey } from '@/types'

export const NOTE_TABS: NoteTab[] = [
  { key: 'all', label: '全部' },
  { key: 'inbox', label: '未整理' },
  { key: 'starred', label: '已收藏' },
  { key: 'marked', label: '已加标记' },
  { key: 'trash', label: '回收站' }
]

export const DEFAULT_NOTE_TAB: NoteTabKey = 'all'

/** 快捷记录输入框的占位文案，与语雀小记一致 */
export const NOTE_CAPTURE_PLACEHOLDER = '输入内容，自动按时间整理为小记'

/**
 * 小记列表按标签页分组。
 * 「全部」是其余分组（回收站除外）的并集，为避免同步遗漏在这里显式声明。
 */
export const NOTES_BY_TAB: Record<NoteTabKey, NoteItem[]> = {
  all: [
    {
      id: 'note-standup',
      content: '晨会纪要：陪诊下单链路改版本周五前提测，设计稿评审定在周三下午。',
      date: '03-13 星期五',
      groupName: '工作记录',
      marked: true
    },
    {
      id: 'note-idea',
      content: '灵感：知识库侧栏支持拖拽排序，置顶的知识库可以固定在顶部。',
      date: '03-12 星期四',
      groupName: '未整理的小记',
      starred: true
    },
    {
      id: 'note-todo',
      content: '待办：整理广州陪诊话术模板；预约周六的场地踩点；回复合作方邮件。',
      date: '03-11 星期三',
      groupName: '未整理的小记'
    },
    {
      id: 'note-quote',
      content: '「把重复的事情交给模板，把思考的事情留给自己。」',
      date: '03-09 星期一',
      groupName: '灵感收藏',
      starred: true,
      marked: true
    }
  ],
  inbox: [
    {
      id: 'note-idea',
      content: '灵感：知识库侧栏支持拖拽排序，置顶的知识库可以固定在顶部。',
      date: '03-12 星期四',
      groupName: '未整理的小记',
      starred: true
    },
    {
      id: 'note-todo',
      content: '待办：整理广州陪诊话术模板；预约周六的场地踩点；回复合作方邮件。',
      date: '03-11 星期三',
      groupName: '未整理的小记'
    }
  ],
  starred: [
    {
      id: 'note-idea',
      content: '灵感：知识库侧栏支持拖拽排序，置顶的知识库可以固定在顶部。',
      date: '03-12 星期四',
      groupName: '未整理的小记',
      starred: true
    },
    {
      id: 'note-quote',
      content: '「把重复的事情交给模板，把思考的事情留给自己。」',
      date: '03-09 星期一',
      groupName: '灵感收藏',
      starred: true,
      marked: true
    }
  ],
  marked: [
    {
      id: 'note-standup',
      content: '晨会纪要：陪诊下单链路改版本周五前提测，设计稿评审定在周三下午。',
      date: '03-13 星期五',
      groupName: '工作记录',
      marked: true
    },
    {
      id: 'note-quote',
      content: '「把重复的事情交给模板，把思考的事情留给自己。」',
      date: '03-09 星期一',
      groupName: '灵感收藏',
      starred: true,
      marked: true
    }
  ],
  trash: []
}
