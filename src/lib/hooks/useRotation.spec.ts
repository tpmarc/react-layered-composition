import { act, renderHook } from '@testing-library/react-hooks'
import { useRotation } from './useRotation'

describe('useRotation', () => {
  it('should render rotation with 0 value when use it without args', () => {
    const { result } = renderHook(() => useRotation())

    expect(result.current.value).toEqual(0)
  })

  it('should render the correct rotation after change it from rotate function', () => {
    const { result } = renderHook(() => useRotation(180))

    expect(result.current.value).toEqual(180)

    act(() => {
      result.current.rotate(45)
    })

    expect(result.current.value).toEqual(225)

    act(() => {
      result.current.rotate(400)
    })

    expect(result.current.value).toEqual(265)

    act(() => {
      result.current.rotate(100)
    })

    expect(result.current.value).toEqual(5)
  })

  it('should render the max value 360 after changing rotation from setRotate function', () => {
    const { result } = renderHook(() => useRotation())

    act(() => {
      result.current.setValue(400)
    })

    expect(result.current.value).toEqual(360)
  })

  it('should render the max value 360 after changing rotation from setRotate function', () => {
    const { result } = renderHook(() => useRotation())

    act(() => {
      result.current.setValue(400)
    })

    expect(result.current.value).toEqual(360)

    act(() => {
      result.current.setValue(-1000)
    })

    expect(result.current.value).toEqual(0)
  })
})
