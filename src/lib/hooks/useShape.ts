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

export const clipPaths = {
  [Shapes.Triangle]: 'polygon(50% 0%, 0% 100%, 100% 100%)',

  [Shapes.Trapezoid]: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',

  [Shapes.Parallelogram]: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',

  [Shapes.Rhombus]: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',

  [Shapes.Pentagon]: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',

  [Shapes.Hexagon]:
    'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',

  [Shapes.Heptagon]:
    'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)',

  [Shapes.Octagon]:
    'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',

  [Shapes.Nonagon]:
    'polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)',

  [Shapes.Decagon]:
    'polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)',

  [Shapes.Bevel]:
    'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',

  [Shapes.Rabbet]:
    'polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)',

  [Shapes.LeftArrow]:
    'polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%)',

  [Shapes.RightArrow]:
    'polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)',

  [Shapes.LeftPoint]: 'polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)',

  [Shapes.RightPoint]: 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)',

  [Shapes.LeftChevron]:
    'polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)',

  [Shapes.RightChevron]:
    'polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)',

  [Shapes.Star]:
    'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',

  [Shapes.Cross]:
    'polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%)',

  [Shapes.Message]:
    'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)',

  [Shapes.Close]:
    'polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)',

  [Shapes.Frame]:
    'polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)',

  [Shapes.Circle]: 'circle(50% at 50% 50%)',

  [Shapes.Ellipse]: 'ellipse(25% 40% at 50% 50%)',

  [Shapes.Rectangle]: undefined,
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
  const clipPath = clipPaths[shape]

  const unit = useUnit()
  const dimensions = useDimensions(unit)
  const positions = usePositions(unit)
  const rotation = useRotation()

  return { shape, setShape, clipPath, rotation, dimensions, positions }
}
