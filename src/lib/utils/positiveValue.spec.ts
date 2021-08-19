import { positiveValue } from './positiveValue'

describe('positiveValue', () => {
  it('should return the same value when it is zero or positive', () => {
    expect(positiveValue(0)).toEqual(0)
    expect(positiveValue(500)).toEqual(500)
    expect(positiveValue(Math.PI)).toEqual(Math.PI)
  })

  it('should return the zero when the value provided is negative', () => {
    expect(positiveValue(-2)).toEqual(0)
    expect(positiveValue(-100.42)).toEqual(0)
  })

  it('should return the zero when the value provided is null or undefined', () => {
    expect(positiveValue(null)).toEqual(0)
    expect(positiveValue(undefined)).toEqual(0)
  })
})
