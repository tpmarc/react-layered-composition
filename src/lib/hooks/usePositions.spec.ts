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
    const unit = 'px'
    const x = 100
    const y = 200
    const { result } = renderHook(() => usePositions(unit, x, y))

    expect(result.current.x).toEqual(100)
    expect(result.current.y).toEqual(200)
    expect(result.current.xRepresentation).toEqual(`${x}${unit}`)
    expect(result.current.yRepresentation).toEqual(`${y}${unit}`)
  })

  it('should correct values after changing it', () => {
    const unit = 'px'
    let x = 500
    let y = 200
    const { result } = renderHook(() => usePositions('px', x, y))

    act(() => {
      x = -10.2
      y = -20.3
      result.current.setX(x)
      result.current.setY(y)
    })

    expect(result.current.x).toEqual(x)
    expect(result.current.y).toEqual(y)
    expect(result.current.xRepresentation).toEqual(`${x}${unit}`)
    expect(result.current.yRepresentation).toEqual(`${y}${unit}`)
  })
})
