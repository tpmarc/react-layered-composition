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

  it('should return the zero when the value provided is null or undefined and there is no default value provided', () => {
    expect(positiveValue(null)).toEqual(0)
    expect(positiveValue(undefined)).toEqual(0)
  })

  it('should return the default value provided when the value provided is null or undefined', () => {
    expect(positiveValue(null, 50)).toEqual(50)
    expect(positiveValue(undefined, 14.4)).toEqual(14.4)
  })
})
