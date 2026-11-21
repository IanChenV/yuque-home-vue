<script setup lang="ts">
import Icon from '@/components/icons/Icon.vue'
import PageHeader from '@/components/common/PageHeader.vue'
import TeamRow from '@/components/team/TeamRow.vue'
import { TEAMS } from '@/data/teams'
</script>

<template>
  <main class="workspace-scroll min-w-0 flex-1 overflow-y-auto bg-canvas px-8 py-7">
    <PageHeader title="小组" description="邀请伙伴一起写作，共享知识库与协作空间。">
      <template #actions>
        <button type="button" class="btn-primary">
          <Icon name="plus" :size="16" :stroke-width="2" />
          新建小组
        </button>
      </template>
    </PageHeader>

    <ul class="mt-6">
      <TeamRow v-for="team in TEAMS" :key="team.id" :team="team" />
    </ul>

    <p class="mt-6 text-[12px] text-sub">
      小组内的知识库会同步显示在左侧栏「小组」分组中，可快速跳转。
    </p>
  </main>
</template>
