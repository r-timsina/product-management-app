<script setup lang="ts"></script>

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
