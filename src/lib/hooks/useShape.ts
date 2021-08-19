import { useState } from 'react'
import { useUnit } from '../contexts/UnitContext'
import { UseDimensions, useDimensions } from './useDimensions'
import { UsePositions, usePositions } from './usePositions'
import { UseRotation, useRotation } from './useRotation'

export enum Shapes {
  Star = 'star',
  Oval = 'oval',
  Triangle = 'triangle',
  Pentagon = 'pentangon',
  Hexagon = 'hexagon',
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
