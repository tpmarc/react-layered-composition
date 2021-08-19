import { createContext, useContext } from 'react'

export enum Units {
  Pixels = 'px',
  Centimeters = 'cm',
}

export const UnitContext = createContext<Units>(Units.Pixels)
export const UnitProvider = UnitContext.Provider

export function useUnit() {
  const unit = useContext(UnitContext)

  return unit
}
