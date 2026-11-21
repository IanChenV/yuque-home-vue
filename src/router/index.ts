import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import type { Router, RouterHistory } from 'vue-router'
import BoardView from '@/views/BoardView.vue'
import ExploreView from '@/views/ExploreView.vue'
import FavoriteView from '@/views/FavoriteView.vue'
import KnowledgeView from '@/views/KnowledgeView.vue'
import NoteView from '@/views/NoteView.vue'
import StartView from '@/views/StartView.vue'
import TeamView from '@/views/TeamView.vue'

/**
 * 路由 name 与侧边栏导航 key 一一对应（见 data/nav.ts），
 * App 里的 selectNav 直接按 key push 同名路由。
 */
export const routes = [
  { path: '/', redirect: { name: 'start' } },
  { path: '/start', name: 'start', component: StartView, meta: { title: '开始' } },
  { path: '/board', name: 'board', component: BoardView, meta: { title: 'Board' } },
  { path: '/note', name: 'note', component: NoteView, meta: { title: '小记' } },
  { path: '/favorite', name: 'favorite', component: FavoriteView, meta: { title: '收藏' } },
  { path: '/explore', name: 'explore', component: ExploreView, meta: { title: '逛逛' } },
  { path: '/knowledge', name: 'knowledge', component: KnowledgeView, meta: { title: '知识库' } },
  { path: '/team', name: 'team', component: TeamView, meta: { title: '小组' } },
  { path: '/:pathMatch(.*)*', redirect: { name: 'start' } }
]

/**
 * 工厂函数而非常量导出：单测可以传 memory history，
 * 避免 jsdom 下共享 window.history 造成用例互相污染。
 */
export function createAppRouter(history?: RouterHistory): Router {
  return createRouter({
    history: history ?? createWebHistory(),
    routes
  })
}

export { createMemoryHistory }
