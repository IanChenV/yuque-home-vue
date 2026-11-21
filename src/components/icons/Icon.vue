<script setup lang="ts">
import { computed } from 'vue'
import type { IconName } from '@/types'
import { ICON_SHAPES } from './shapes'

const props = withDefaults(
  defineProps<{
    name: IconName
    /** 渲染边长（px），线性图标按规范取 18–20 */
    size?: number
    strokeWidth?: number
    /** 覆盖描边色，默认继承文本颜色 */
    color?: string
  }>(),
  {
    size: 20,
    strokeWidth: 1.5,
    color: undefined
  }
)

const shapes = computed(() => ICON_SHAPES[props.name])
</script>

<template>
  <svg
    :width="props.size"
    :height="props.size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="props.color ?? 'currentColor'"
    :stroke-width="props.strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="shrink-0"
    aria-hidden="true"
    focusable="false"
  >
    <!-- 分支渲染代替 v-html，杜绝 HTML 注入 -->
    <template v-for="(shape, index) in shapes" :key="index">
      <path
        v-if="shape.t === 'path'"
        :d="shape.d"
        :fill="shape.fill"
        :stroke="shape.stroke"
        :stroke-width="shape.strokeWidth"
        :opacity="shape.opacity"
      />
      <circle
        v-else-if="shape.t === 'circle'"
        :cx="shape.cx"
        :cy="shape.cy"
        :r="shape.r"
        :fill="shape.fill"
        :stroke="shape.stroke"
        :stroke-width="shape.strokeWidth"
        :opacity="shape.opacity"
      />
      <rect
        v-else
        :x="shape.x"
        :y="shape.y"
        :width="shape.w"
        :height="shape.h"
        :rx="shape.rx"
        :fill="shape.fill"
        :stroke="shape.stroke"
        :stroke-width="shape.strokeWidth"
        :opacity="shape.opacity"
      />
    </template>
  </svg>
</template>
