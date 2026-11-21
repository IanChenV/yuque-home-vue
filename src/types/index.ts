/** 全站共享类型 */

/** Icon.vue 注册表可用的图标名，新增图标必须同步扩展此联合类型 */
export type IconName =
  | 'bell'
  | 'search'
  | 'plus'
  | 'clock'
  | 'board'
  | 'note'
  | 'star'
  | 'grid'
  | 'knowledge'
  | 'chevronRight'
  | 'chevronDown'
  | 'lock'
  | 'close'
  | 'doc'
  | 'bulb'
  | 'dots'
  | 'headset'
  | 'smile'
  | 'logoLeaf'
  | 'docAdd'
  | 'knowledgeAdd'
  | 'template'
  | 'cube'
  | 'whale'
  | 'boardMark'
  | 'team'
  | 'sheet'
  | 'globe'
  | 'heart'
  | 'comment'
  | 'sun'
  | 'moon'

/** 侧边栏导航项 */
export interface NavItem {
  key: string
  label: string
  icon: IconName
}

/** 知识库下的子节点 */
export interface KnowledgeBaseChild {
  label: string
  locked: boolean
}

/** 「开始」下的功能卡片 */
export interface FeatureCardModel {
  key: string
  title: string
  description: string
  icon: IconName
  /** 右上角小标签，例如「即将上线」 */
  badge?: string
  /** 标题右侧的下拉箭头 */
  hasCaret?: boolean
}

/** 文档列表标签页 */
export type DocTabKey = 'edited' | 'viewed' | 'liked' | 'commented'

export interface DocTab {
  key: DocTabKey
  label: string
}

/** 文档列表条目 */
export interface DocItem {
  id: string
  title: string
  /** 标题前的装饰图标（灯泡等），无则显示默认文档图标 */
  leadingIcon?: IconName
  /** 所属路径，例如「广州陪诊专号 / 默认知识库」 */
  path: string
  updatedAt: string
}

/** 筛选下拉的静态描述 */
export interface FilterMenu {
  key: string
  label: string
}

/** 通用 pill 标签（收藏页、知识库页等复用 PillTabs 时使用） */
export interface TabItem<K extends string = string> {
  key: K
  label: string
}

/* ---------- 小记 ---------- */

export type NoteTabKey = 'all' | 'inbox' | 'starred' | 'marked' | 'trash'

export interface NoteTab {
  key: NoteTabKey
  label: string
}

export interface NoteItem {
  id: string
  /** 小记正文（mock 数据只存纯文本，不含 HTML，避免注入面） */
  content: string
  /** 展示用日期，例如「03-13 星期三」 */
  date: string
  /** 归属分组名，例如「未整理的小记」 */
  groupName: string
  starred?: boolean
  marked?: boolean
}

/* ---------- 收藏 ---------- */

export type FavoriteKind = 'doc' | 'sheet' | 'board' | 'note' | 'knowledge' | 'group'
export type FavoriteFilter = FavoriteKind | 'all'

export interface FavoriteItem {
  id: string
  title: string
  kind: FavoriteKind
  icon: IconName
  /** 来源路径，例如「广州陪诊专号 / 默认知识库」 */
  source: string
  /** 收藏夹名，未归类则为空 */
  folder?: string
  favoritedAt: string
}

/* ---------- 逛逛 ---------- */

export interface ExplorePost {
  id: string
  title: string
  summary: string
  author: string
  /** 来源知识库名 */
  bookName: string
  category: string
  likes: number
  comments: number
}

/* ---------- 知识库 ---------- */

export type KnowledgeBaseKind = 'doc' | 'sheet' | 'board'
export type KnowledgeTabKey = 'mine' | 'joined'

export interface KnowledgeBaseModel {
  id: string
  name: string
  description: string
  kind: KnowledgeBaseKind
  docCount: number
  privacy: 'public' | 'private'
  pinned: boolean
  updatedAt: string
}

/* ---------- 小组 ---------- */

export interface TeamModel {
  id: string
  name: string
  /** 头像方块里的首字符 */
  initial: string
  description: string
  members: number
  books: number
  updatedAt: string
}

/* ---------- Board ---------- */

export type BoardStatus = 'ready' | 'analyzing'

export interface BoardModel {
  id: string
  title: string
  summary: string
  /** 采集来源知识库名 */
  sourceName: string
  status: BoardStatus
  updatedAt: string
}
