<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
;(async () => {
  const { data, error } = await supabase.from('projects').select()
  if (error) {
    console.log(error)
  }
  console.log('Projects: ', data)
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
  </div>
</template>

<style scoped></style>
