export function positiveValue(value?: number | null) {
  if (value === null || value === undefined) {
    return 0
  }

  return Math.max(0, value)
}
