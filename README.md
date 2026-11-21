
# yuque-home-vue

[![CI](https://github.com/IanChenV/yuque-home-vue/actions/workflows/ci.yml/badge.svg)](https://github.com/IanChenV/yuque-home-vue/actions/workflows/ci.yml)

语雀 dashboard（https://www.yuque.com/dashboard）的多页面高保真复刻，纯前端静态实现：
数据全部来自本地 mock，无后端依赖，开箱即用。

在线预览：**https://ianchenv.github.io/yuque-home-vue/**

## 技术栈

| 类别 | 选型 |
| --- | --- |
| 框架 | Vue 3.5（`<script setup>` + TypeScript 严格模式） |
| 构建 | Vite 6 |
| 路由 | vue-router 4（history 模式，导航 key 与路由 name 一一对应） |
| 样式 | Tailwind CSS 3 + CSS 变量设计令牌（亮/暗双主题） |
| 测试 | Vitest + @vue/test-utils + jsdom（语句覆盖率约 99%） |

## 快速开始

```bash
npm install
npm run dev        # 开发服务器，默认 http://localhost:5173
```

可用脚本：

| 命令 | 作用 |
| --- | --- |
| `npm run dev` | 本地开发 |
| `npm run build` | 类型检查 + 生产构建 |
| `npm run typecheck` | 仅 `vue-tsc --noEmit` |
| `npm test` | 运行全部单测 |
| `npm run test:coverage` | 单测 + 覆盖率报告（text + html） |
| `npm run preview` | 预览构建产物 |

## 页面与路由

| 路由 | 页面 | 内容 |
| --- | --- | --- |
| `/start` | 开始 | 功能卡片入口 + 文档列表（编辑过/浏览过/点赞/评论四个标签页） |
| `/board` | Board | 三步引导卡 + 「我的 Board」列表 |
| `/note` | 小记 | 分组标签 + 快捷记录输入 + 小记卡片流 |
| `/favorite` | 收藏 | 按类型（文档/表格/Board/小记/知识库/小组）筛选 |
| `/explore` | 逛逛 | 频道过滤 + 推荐文章卡片 |
| `/knowledge` | 知识库 | 我的/加入的知识库卡片，含置顶与公开/隐私标识 |
| `/team` | 小组 | 小组成员统计列表 |

未知路径统一回退到 `/start`。

## 架构约定

- **状态单向流动**：组合式函数（`src/composables/`）持有状态，组件只渲染并通过 emit 派发意图；选中态由路由单点驱动。
- **主题令牌**：所有颜色只在 `src/styles/tokens.css` 定义一次（`:root` 亮色基线，`.dark` 覆盖），组件只用语义类名（`bg-surface` / `text-sub` / `border-line`），切换主题零改动。
- **图标系统**：`src/components/icons/shapes.ts` 以数据描述图元、分支渲染，不使用 `v-html`，杜绝注入面；新增图标须同步扩展 `IconName` 联合类型。
- **不可变性**：状态切换只重新赋值 ref，从不修改 `src/data/` 下的模块级 mock 数据。

## 目录结构

```text
src/
├── components/
│   ├── board/ favorite/ explore/ knowledge/ note/ team/   # 各页面业务组件
│   ├── common/        # PageHeader / PillTabs / EmptyState
│   ├── icons/         # Icon + 图元数据
│   ├── sidebar/       # 侧边栏（品牌栏/搜索/导航/分组/促销/主题）
│   └── workspace/     # 「开始」页工作台
├── composables/       # useWorkspace / useSidebar / useTheme
├── data/              # 各域 mock 数据源
├── router/            # 路由表与 createAppRouter 工厂
├── styles/tokens.css  # 设计令牌 + 全局基础样式
├── types/             # 全站共享类型
└── views/             # 7 个页面级视图
```

## CI 与部署

- **质量门禁**（`.github/workflows/ci.yml`）：push(main) 与 PR 触发，
  类型检查 -> 单测（含覆盖率门槛）-> 生产构建。
- **Pages 部署**（`.github/workflows/deploy.yml`）：push(main) 触发，
  构建产物经 `actions/deploy-pages` 发布到
  https://ianchenv.github.io/yuque-home-vue/。
  SPA 深链接依赖 `public/404.html` 做客户端路径转发。

## License

MIT
