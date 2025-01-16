<script setup lang="ts">
import { columns } from '@/utils/tableColumns/projectsColumns'
import { projectsQuery, type Projects } from '@/utils/supaQueries'

usePageStore().pageData.title = 'Projects'

const projects = ref<Projects | null>(null)
const getProjects = async () => {
  const { data, error } = await projectsQuery
  projects.value = data
  if (error) {
    console.log(error)
  }
}
await getProjects()
</script>

<template>
  <div>
    <DataTable v-if="projects" :columns="columns" :data="projects" />
  </div>
</template>

<style scoped></style>
