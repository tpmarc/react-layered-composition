import { renderHook, act } from '@testing-library/react-hooks'
import { DEFAULT_HEIGHT, DEFAULT_WIDTH, useDimensions } from './useDimensions'

describe('useDimensions', () => {
  it('should render with zero on both dimensions on init with unit only', () => {
    const unit = 'px'
    const { result } = renderHook(() => useDimensions(unit))

    expect(result.current.width).toEqual(DEFAULT_WIDTH)
    expect(result.current.height).toEqual(DEFAULT_HEIGHT)
    expect(result.current.widthRepresentation).toEqual(
      `${DEFAULT_WIDTH}${unit}`
    )
    expect(result.current.heightRepresentation).toEqual(
      `${DEFAULT_HEIGHT}${unit}`
    )
  })

  it('should render with zero on both dimensions on init without negative values', () => {
    const { result } = renderHook(() => useDimensions('px', -1, -2))

    expect(result.current.width).toEqual(0)
    expect(result.current.height).toEqual(0)
    expect(result.current.widthRepresentation).toEqual('0px')
    expect(result.current.heightRepresentation).toEqual('0px')
  })

  it('should render with initial dimensions', () => {
    const unit = 'px'
    const width = 100
    const height = 200
    const { result } = renderHook(() => useDimensions(unit, width, height))

    expect(result.current.width).toEqual(width)
    expect(result.current.height).toEqual(height)
    expect(result.current.widthRepresentation).toEqual(`${width}${unit}`)
    expect(result.current.heightRepresentation).toEqual(`${height}${unit}`)
  })

  it('should accept to set positive values', () => {
    const unit = 'px'
    const width = 100
    const height = 200
    const { result } = renderHook(() => useDimensions(unit))

    act(() => {
      result.current.setWidth(width)
      result.current.setHeight(height)
    })

    expect(result.current.width).toEqual(width)
    expect(result.current.height).toEqual(height)
    expect(result.current.widthRepresentation).toEqual(`${width}${unit}`)
    expect(result.current.heightRepresentation).toEqual(`${height}${unit}`)
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
    let unit = 'px'
    const width = 400
    const height = 300
    const { result } = renderHook(() => useDimensions(unit, width, height))

    expect(result.current.widthRepresentation).toEqual(`${width}${unit}`)
    expect(result.current.heightRepresentation).toEqual(`${height}${unit}`)

    act(() => {
      unit = 'cm'
      result.current.setUnit(unit)
    })

    expect(result.current.widthRepresentation).toEqual(`${width}${unit}`)
    expect(result.current.heightRepresentation).toEqual(`${height}${unit}`)
  })
})
