import type { customError } from '@/types/Error'

export const useErrorStore = defineStore('error-store', () => {
  const activeError = ref<null | customError>(null)
  const setError = ({ error, customCode }: { error: string; customCode: number }) => {
    activeError.value = Error(error)
    activeError.value.customCode = customCode
  }
  return {
    activeError,
    setError
  }
})
