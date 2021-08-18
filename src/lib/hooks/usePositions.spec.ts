import { renderHook, act } from '@testing-library/react-hooks'
import { usePositions } from './usePositions'

describe('usePositions', () => {
  it('should render with zero on both positions on init with unit only', () => {
    const { result } = renderHook(() => usePositions('px'))

    expect(result.current.x).toEqual(0)
    expect(result.current.y).toEqual(0)
    expect(result.current.xRepresentation).toEqual('0px')
    expect(result.current.yRepresentation).toEqual('0px')
  })

  it('should render with values for positions on init with it', () => {
    const { result } = renderHook(() => usePositions('px', 100, 200))

    expect(result.current.x).toEqual(100)
    expect(result.current.y).toEqual(200)
    expect(result.current.xRepresentation).toEqual('100px')
    expect(result.current.yRepresentation).toEqual('200px')
  })

  it('should correct values after changing it', () => {
    const { result } = renderHook(() => usePositions('px', 500, 200))

    act(() => {
      result.current.setX(-10.2)
      result.current.setY(-20.3)
    })

    expect(result.current.x).toEqual(-10.2)
    expect(result.current.y).toEqual(-20.3)
    expect(result.current.xRepresentation).toEqual('-10.2px')
    expect(result.current.yRepresentation).toEqual('-20.3px')
  })

  it('should correct values after changing the unit', () => {
    const { result } = renderHook(() => usePositions('px', 5.0, 3.9))

    act(() => {
      result.current.setUnit('cm')
    })

    expect(result.current.x).toEqual(5.0)
    expect(result.current.y).toEqual(3.9)
    expect(result.current.xRepresentation).toEqual('5cm')
    expect(result.current.yRepresentation).toEqual('3.9cm')
  })
})
