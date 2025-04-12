export const validateEmail = (email: string) => {
  const trimmedEmail = email.trim()
  if (!trimmedEmail) return []

  const errors = []
  const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
  const isValidFormat = emailRegex.test(trimmedEmail)
  if (!isValidFormat) errors.push('Not a valid email format')
  return errors
}

export const validatePassword = (password: string) => {
  if (!password) return []
  const errors = []
  if (password.length <= 6) errors.push('Password must be more than 6 characters')
  if (!password.includes('@')) errors.push('Password must must include special characters')

  return errors
}
