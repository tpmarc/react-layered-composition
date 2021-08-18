import { useState } from 'react'

export function useDimensions(
  initialUnit: string,
  initialWidth?: number,
  initialHeight?: number
) {
  const [unit, setUnit] = useState<string>(initialUnit)

  const [width, _setWidth] = useState<number>(
    _sanitizeDimension(initialWidth) || 0
  )

  function _getWidthRepresentation(): string {
    return `${width}${unit}`
  }

  function setWidth(width: number) {
    _setWidth(_sanitizeDimension(width))
  }

  const [height, _setHeight] = useState<number>(
    _sanitizeDimension(initialHeight)
  )

  function _getHeightRepresentation(): string {
    return `${height}${unit}`
  }

  function setHeight(height: number) {
    _setHeight(_sanitizeDimension(height))
  }

  function _sanitizeDimension(value?: number) {
    if (!value) {
      return 0
    }

    return Math.max(0, value)
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
