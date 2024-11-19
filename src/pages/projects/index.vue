<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'
const projects = ref()
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
    {{ projects }}
  </div>
</template>

<style scoped></style>
