<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'
import type { Tables } from '../../../database/types'
const projects = ref<Tables<'projects'>[] | null>(null)
;(async () => {
  const { data, error } = await supabase.from('projects').select()
  projects.value = data
  if (error) {
    console.log(error)
  }
  console.log('Projects: ', projects.value)
})()
</script>

<template>
  <div>
    Your Projects Here!
    <RouterLink :to="{ path: '/' }">Home</RouterLink>
    <div class="">
      go to project 1
      <RouterLink :to="{ name: '/projects/[id]', params: { id: '1' } }">Click Here</RouterLink>
    </div>
    <ul>
      <li v-for="project in projects" :key="project.id">{{ project }}</li>
    </ul>
  </div>
</template>

<style scoped></style>
