<script setup lang="ts">
import { ref } from 'vue'
import { NOTE_CAPTURE_PLACEHOLDER } from '@/data/notes'

/**
 * 快捷记录：纯前端 mock，保存只清空本地草稿，不写入数据源。
 * 接入真实接口时在此派发 save 事件即可。
 */
const draft = ref('')

function save(): void {
  draft.value = ''
}
</script>

<template>
  <section
    aria-label="快捷记录"
    class="rounded-card border border-line bg-surface p-4 shadow-card"
  >
    <h2 class="text-[14px] font-bold text-ink">快捷记录</h2>

    <textarea
      v-model="draft"
      rows="5"
      :placeholder="NOTE_CAPTURE_PLACEHOLDER"
      aria-label="小记内容"
      class="mt-3 w-full resize-none rounded-btn border border-line bg-canvas p-3 text-[13px] text-ink outline-none placeholder:text-sub focus:border-brand"
    />

    <div class="mt-3 flex items-center justify-between">
      <span class="text-[12px] text-sub">支持 Markdown 语法</span>
      <button type="button" class="btn-primary" :disabled="draft.length === 0" @click="save">
        保存
      </button>
    </div>
  </section>
</template>

<style scoped>
/* 空草稿时按钮禁用态 */
.btn-primary:disabled {
  @apply cursor-not-allowed opacity-50;
}
</style>
