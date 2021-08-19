import React, { useState } from 'react'
import { useDimensions, UseDimensions } from '../hooks/useDimensions'
import { usePositions, UsePositions } from '../hooks/usePositions'

export enum LayerObjectShapes {
  Star = 'star',
  Oval = 'oval',
  Triangle = 'triangle',
  Pentagon = 'pentangon',
  Hexagon = 'hexagon',
  Rectangle = 'rectangle',
}

export const DEFAULT_LAYER_OBJECT_SHAPE = LayerObjectShapes.Rectangle

export interface ILayerObject {
  shape: LayerObjectShapes
  setShape: (shape: LayerObjectShapes) => void
  dimensions: UseDimensions
  positions: UsePositions
}

export interface LayerObjectProps {
  children: ({ dimensions, positions }: ILayerObject) => void
}

export function LayerObject({ children }: LayerObjectProps) {
  const [shape, setShape] = useState<LayerObjectShapes>(
    DEFAULT_LAYER_OBJECT_SHAPE
  )

  const dimensions = useDimensions('px', 100, 100)
  const positions = usePositions('px')

  return <>{children({ shape, setShape, dimensions, positions })}</>
}
