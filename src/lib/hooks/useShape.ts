import { useState } from 'react'
import { UseDimensions, useDimensions } from './useDimensions'
import { UsePositions, usePositions } from './usePositions'

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
}

export function useShape(initialShape?: Shapes) {
  const [shape, setShape] = useState<Shapes>(initialShape || DEFAULT_SHAPE)

  const dimensions = useDimensions('px')
  const positions = usePositions('px')

  return { shape, setShape, dimensions, positions }
}
