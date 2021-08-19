import { renderHook } from '@testing-library/react-hooks'
import { DEFAULT_HEIGHT, DEFAULT_WIDTH } from './useDimensions'
import { DEFAULT_X, DEFAULT_Y } from './usePositions'
import { DEFAULT_SHAPE, useShape } from './useShape'

describe('useShape', () => {
  it('should render a shape with default shape values', () => {
    const { result } = renderHook(() => useShape())

    expect(result.current.positions.x).toEqual(DEFAULT_X)
    expect(result.current.positions.y).toEqual(DEFAULT_Y)
    expect(result.current.dimensions.width).toEqual(DEFAULT_WIDTH)
    expect(result.current.dimensions.height).toEqual(DEFAULT_HEIGHT)
    expect(result.current.shape).toEqual(DEFAULT_SHAPE)
  })
})
