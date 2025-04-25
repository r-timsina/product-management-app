<script setup lang="ts">
import { columns } from '@/utils/tableColumns/projectsColumns'
import { useProjectsStore } from '@/stores/loaders/projects'
import { useCollabs } from '@/composables/collabs'

usePageStore().pageData.title = 'Projects'

const projectsLoader = useProjectsStore()

const { projects } = storeToRefs(projectsLoader)
const { getProjects } = projectsLoader

await getProjects()

const { getProfilesByIds } = useCollabs()
const test = await getProfilesByIds(projects.value[0].collaborators)

// getGroupedCollabs(projects.value)
</script>

<template>
  <div>
    <DataTable v-if="projects" :columns="columns" :data="projects" />
  </div>
</template>

<style scoped></style>
