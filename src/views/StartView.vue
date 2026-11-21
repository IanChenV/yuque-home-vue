<script setup lang="ts">
import WorkspaceMain from '@/components/workspace/WorkspaceMain.vue'
import { useWorkspace } from '@/composables/useWorkspace'

// 状态在此收口，单向数据流：props 下发状态，emit 回传意图
const { activeTab, docs, selectTab } = useWorkspace()
</script>

<template>
  <WorkspaceMain :active-tab="activeTab" :docs="docs" @select-tab="selectTab" />
</template>
