import React from 'react'
import { render } from '@testing-library/react'
import { ShapeLayer } from './ShapeLayer'
import { DEFAULT_SHAPE } from '../hooks/useShape'
import { DEFAULT_X, DEFAULT_Y } from '../hooks/usePositions'
import { DEFAULT_HEIGHT, DEFAULT_WIDTH } from '../hooks/useDimensions'

describe('<ShapeLayer />', () => {
  it('should render a layer object with default positions and dimensions', () => {
    render(
      <ShapeLayer>
        {({ shape, dimensions, positions }) => {
          expect(shape).toEqual(DEFAULT_SHAPE)
          expect(positions.x).toEqual(DEFAULT_X)
          expect(positions.y).toEqual(DEFAULT_Y)
          expect(dimensions.width).toEqual(DEFAULT_WIDTH)
          expect(dimensions.height).toEqual(DEFAULT_HEIGHT)
        }}
      </ShapeLayer>
    )
  })
})
