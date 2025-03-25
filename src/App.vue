<script setup lang="ts">
import AppErrorPage from './components/AppError/AppErrorPage.vue'
import { useErrorStore } from '@/stores/error'
import { supabase } from './lib/supabaseClient'

const errorStore = useErrorStore()
const authStore = useAuthStore()

onMounted(async () => {
  const { data } = await supabase.auth.getSession()
  if (data.session?.user) await authStore.setAuth(data.session)
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
