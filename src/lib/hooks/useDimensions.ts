import { useState } from 'react'
import { positiveValue } from '../utils/positiveValue'

export interface UseDimensions {
  unit: string
  setUnit: (unit: string) => void
  width: number
  widthRepresentation: string
  setWidth: (width: number) => void
  height: number
  heightRepresentation: string
  setHeight: (height: number) => void
}

export function useDimensions(
  initialUnit: string,
  initialWidth?: number,
  initialHeight?: number
): UseDimensions {
  const [unit, setUnit] = useState<string>(initialUnit)

  const [width, _setWidth] = useState<number>(positiveValue(initialWidth) || 0)

  function _getWidthRepresentation(): string {
    return `${width}${unit}`
  }

  function setWidth(width: number) {
    _setWidth(positiveValue(width))
  }

  const [height, _setHeight] = useState<number>(positiveValue(initialHeight))

  function _getHeightRepresentation(): string {
    return `${height}${unit}`
  }

  function setHeight(height: number) {
    _setHeight(positiveValue(height))
  }

  return {
    unit,
    setUnit,
    width,
    widthRepresentation: _getWidthRepresentation(),
    setWidth,
    height,
    heightRepresentation: _getHeightRepresentation(),
    setHeight,
  }
}
