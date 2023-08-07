import React from "react"
import { SelectContext } from "./select-context"

export const useSelect = () => {
  const context = React.useContext(SelectContext)
  if (!context) {
    throw new Error("Use the select context inside of a select-wrapper")
  }
  return context
}
