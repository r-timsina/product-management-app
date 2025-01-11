<script setup lang="ts">
import { set } from '@vueuse/core'

const MocComponent = defineComponent(async () => {
  const greeting = ref('Hello')

  await new Promise((resolve) => {
    greeting.value = 'Hello from the database'

    setTimeout(() => {
      resolve(true)
    }, 1000)
  })
  return () => h('p', greeting.value)
})
</script>

<template>
  <MocComponent />
  <AuthLayout>
    <Suspense>
      <MocComponent />
      <template #fallback>
        <span>Loading...</span>
      </template>
    </Suspense>
    <RouterView />
  </AuthLayout>
</template>
