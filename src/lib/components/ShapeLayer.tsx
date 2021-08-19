import React from 'react'
import { useShape, UseShape } from '../hooks/useShape'

interface ShapeLayerChildren extends UseShape {
  styles: React.CSSProperties
}

export interface ShapeLayerProps {
  children: ({
    styles,
    shape,
    setShape,
    dimensions,
    positions,
  }: ShapeLayerChildren) => void
}

export function ShapeLayer({ children }: ShapeLayerProps) {
  const { shape, setShape, clipPath, rotation, dimensions, positions } =
    useShape()

  const styles = {
    clipPath,
  }

  return (
    <>
      {children({ styles, shape, setShape, rotation, dimensions, positions })}
    </>
  )
}
