<script setup lang="ts">
import { columns } from '@/utils/tableColumns/tasksColumns'
import { tasksWithProjectQuery } from '@/utils/supaQueries'
import { type tasksWithProjects } from '@/utils/supaQueries'

usePageStore().pageData.title = 'My Tasks'

const tasks = ref<tasksWithProjects | null>(null)
const getTasks = async () => {
  const { data, error, status } = await tasksWithProjectQuery

  if (error) useErrorStore().setError({ error, customCode: status })

  tasks.value = data
}

await getTasks()
</script>

<template>
  <div>
    <DataTable v-if="tasks" :columns="columns" :data="tasks" />
  </div>
</template>
