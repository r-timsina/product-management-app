<script setup lang="ts"></script>

<template>
  <nav class="w-full h-16 border-b bg-muted/40 flex justify-between items-center px-6">
    <form class="w-full max-w-96">
      <input class="max-w-96 w-full pl-8 bg-background" type="text" placeholder="Search..." />
    </form>
    <div class="bg-white rounded-full h-8 w-8"></div>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
