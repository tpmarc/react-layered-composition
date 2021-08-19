import { renderHook, act } from '@testing-library/react-hooks'
import { useDimensions } from './useDimensions'

describe('useDimensions', () => {
  it('should render with zero on both dimensions on init with unit only', () => {
    const { result } = renderHook(() => useDimensions('px'))

    expect(result.current.width).toEqual(0)
    expect(result.current.height).toEqual(0)
    expect(result.current.widthRepresentation).toEqual('0px')
    expect(result.current.heightRepresentation).toEqual('0px')
  })

  it('should render with zero on both dimensions on init without negative values', () => {
    const { result } = renderHook(() => useDimensions('px', -1, -2))

    expect(result.current.width).toEqual(0)
    expect(result.current.height).toEqual(0)
    expect(result.current.widthRepresentation).toEqual('0px')
    expect(result.current.heightRepresentation).toEqual('0px')
  })

  it('should render with initial dimensions', () => {
    const { result } = renderHook(() => useDimensions('px', 100, 200))

    expect(result.current.width).toEqual(100)
    expect(result.current.height).toEqual(200)
    expect(result.current.widthRepresentation).toEqual('100px')
    expect(result.current.heightRepresentation).toEqual('200px')
  })

  it('should accept to set positive values', () => {
    const { result } = renderHook(() => useDimensions('px'))

    act(() => {
      result.current.setWidth(10)
      result.current.setHeight(20)
    })

    expect(result.current.width).toEqual(10)
    expect(result.current.height).toEqual(20)
    expect(result.current.widthRepresentation).toEqual('10px')
    expect(result.current.heightRepresentation).toEqual('20px')
  })

  it('should not accept to set negative values', () => {
    const { result } = renderHook(() => useDimensions('px'))

    act(() => {
      result.current.setWidth(-10)
      result.current.setHeight(-20)
    })

    expect(result.current.width).toEqual(0)
    expect(result.current.height).toEqual(0)
    expect(result.current.widthRepresentation).toEqual('0px')
    expect(result.current.heightRepresentation).toEqual('0px')
  })

  it('should allow to change unit and render correctly', () => {
    const { result } = renderHook(() => useDimensions('px', 400, 300))

    expect(result.current.widthRepresentation).toEqual('400px')
    expect(result.current.heightRepresentation).toEqual('300px')

    act(() => {
      result.current.setUnit('cm')
    })

    expect(result.current.widthRepresentation).toEqual('400cm')
    expect(result.current.heightRepresentation).toEqual('300cm')
  })
})
