import React from 'react'
import { render } from '@testing-library/react'
import { DEFAULT_LAYER_OBJECT_SHAPE, LayerObject } from './LayerObject'

describe('<LayerObject />', () => {
  it('should render a layer object with default positions and dimensions', () => {
    render(
      <LayerObject>
        {({ shape, dimensions, positions }) => {
          expect(shape).toEqual(DEFAULT_LAYER_OBJECT_SHAPE)
          expect(positions.x).toEqual(0)
          expect(positions.y).toEqual(0)
          expect(dimensions.widthRepresentation).toEqual('100px')
          expect(dimensions.heightRepresentation).toEqual('100px')
        }}
      </LayerObject>
    )
  })
})
