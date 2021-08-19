import { useState } from 'react'
import { positiveValue } from '../utils/positiveValue'

export interface UseRotation {
  value: number
  rotate: (amount: number) => void
  setValue: (rotation: number) => void
}

const MIN_DEGREES = 0
const MAX_DEGREES = 360
export const DEFAULT_ROTATION = MIN_DEGREES

export function useRotation(initialValue?: number) {
  const [value, _setValue] = useState<number>(positiveValue(initialValue))

  function rotate(amount: number) {
    _setValue(
      (rotation: number) =>
        (rotation + (amount % MAX_DEGREES) + MAX_DEGREES) % MAX_DEGREES
    )
  }

  function setValue(rotation: number) {
    _setValue(Math.min(MAX_DEGREES, Math.max(MIN_DEGREES, rotation)))
  }

  return { value, rotate, setValue }
}
