<script setup lang="ts">
import AppErrorPage from './components/AppError/AppErrorPage.vue'
import { useErrorStore } from '@/stores/error'

const errorStore = useErrorStore()

onMounted(async () => {
  useAuthStore().trackAuthChanges()
})

onErrorCaptured((error) => {
  errorStore.setError({ error })
})
</script>

<template>
  <AuthLayout>
    <AppErrorPage v-if="errorStore.activeError" />
    <RouterView v-slot="{ Component, route }">
      <Suspense v-if="Component" :timeout="0">
        <Component :is="Component" :key="route.name" />

        <template #fallback>
          <span>Loading...</span>
        </template>
      </Suspense>
    </RouterView>
  </AuthLayout>
</template>
