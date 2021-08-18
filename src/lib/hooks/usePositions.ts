import { useState } from 'react'

export function usePositions(
  initialUnit: string,
  initialX?: number,
  initialY?: number
) {
  const [unit, setUnit] = useState<string>(initialUnit)
  const [x, setX] = useState<number>(initialX || 0)
  const [y, setY] = useState<number>(initialY || 0)

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
