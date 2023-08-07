import React from "react"

export type SelectContextType<T = unknown> = {
  value?: T
  onChange?: (value?: T) => void
  pending?: boolean
  disabled?: boolean
  required?: boolean
  onCriteriaChange?: (criteria: string) => void
}

export const SelectContext = React.createContext<SelectContextType>({})

export const createSelectContext = <T>(initialValue: SelectContextType<T>) => {
  return React.createContext<SelectContextType<T>>(initialValue)
}
