import { useState } from 'react'

export interface UsePositions {
  unit: string
  setUnit: (unit: string) => void
  x: number
  xRepresentation: string
  setX: (x: number) => void
  y: number
  yRepresentation: string
  setY: (y: number) => void
}

export const DEFAULT_X = 0
export const DEFAULT_Y = 0

export function usePositions(
  initialUnit: string,
  initialX?: number,
  initialY?: number
): UsePositions {
  const [unit, setUnit] = useState<string>(initialUnit)
  const [x, setX] = useState<number>(initialX || DEFAULT_X)
  const [y, setY] = useState<number>(initialY || DEFAULT_Y)

  function _getXRepresentation() {
    return `${x}${unit}`
  }

  function _getYRepresentation() {
    return `${y}${unit}`
  }

  return {
    unit,
    setUnit,
    x,
    xRepresentation: _getXRepresentation(),
    setX,
    y,
    yRepresentation: _getYRepresentation(),
    setY,
  }
}
