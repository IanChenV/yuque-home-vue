/// <reference types="vitest/config" />
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // 生产构建部署在 GitHub Pages 项目子路径下；本地 dev 保持根路径
  base: process.env.NODE_ENV === 'production' ? '/yuque-home-vue/' : '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.spec.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['src/**/*.{ts,vue}'],
      // types/index.ts 是纯类型声明，编译后无运行时语句，计入会人为拉低数字
      exclude: ['src/main.ts', 'src/**/*.d.ts', 'src/**/__tests__/**', 'src/types/index.ts']
    }
  }
})
