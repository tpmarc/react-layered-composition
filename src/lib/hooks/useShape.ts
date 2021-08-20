import { useState } from 'react'
import { useUnit } from '../contexts/UnitContext'
import { UseDimensions, useDimensions } from './useDimensions'
import { UsePositions, usePositions } from './usePositions'
import { UseRotation, useRotation } from './useRotation'

export enum Shapes {
  Triangle = 'triangle',
  Trapezoid = 'trapezoid',
  Parallelogram = 'parallelogram',
  Rhombus = 'rhombus',
  Pentagon = 'pentangon',
  Hexagon = 'hexagon',
  Heptagon = 'heptagon',
  Octagon = 'octagon',
  Nonagon = 'Nonagon',
  Decagon = 'decagon',
  Bevel = 'bevel',
  Rabbet = 'rabbet',
  LeftArrow = 'leftArrow',
  RightArrow = 'rightArrow',
  LeftPoint = 'leftPoint',
  RightPoint = 'rightPoint',
  LeftChevron = 'leftChevron',
  RightChevron = 'rightChevron',
  Star = 'start',
  Cross = 'cross',
  Message = 'message',
  Close = 'close',
  Frame = 'frame',
  Circle = 'circle',
  Ellipse = 'ellipse',
  Rectangle = 'rectangle',
}

export const DEFAULT_SHAPE = Shapes.Rectangle

export interface UseShape {
  shape: Shapes
  setShape: (shape: Shapes) => void
  dimensions: UseDimensions
  positions: UsePositions
  rotation: UseRotation
}

export function useShape(initialShape?: Shapes) {
  const [shape, setShape] = useState<Shapes>(initialShape || DEFAULT_SHAPE)

  const unit = useUnit()
  const dimensions = useDimensions(unit)
  const positions = usePositions(unit)
  const rotation = useRotation()

  return { shape, setShape, rotation, dimensions, positions }
}
