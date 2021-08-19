import React from 'react'
import { useShape, UseShape } from '../hooks/useShape'

export interface ShapeLayerProps {
  children: ({ shape, setShape, dimensions, positions }: UseShape) => void
}

export function ShapeLayer({ children }: ShapeLayerProps) {
  const { shape, setShape, rotation, dimensions, positions } = useShape()

  return <>{children({ shape, setShape, rotation, dimensions, positions })}</>
}
