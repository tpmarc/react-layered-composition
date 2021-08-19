export function positiveValue(value?: number | null, defaultValue?: number) {
  if (value === null || value === undefined) {
    return defaultValue || 0
  }

  return Math.max(0, value)
}
