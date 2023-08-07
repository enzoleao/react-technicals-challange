import { Combobox } from "@headlessui/react"
import React from "react"

export interface SelectButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

export const SelectButton: React.FC<SelectButtonProps> = React.forwardRef<
  HTMLButtonElement,
  SelectButtonProps
>(({ children, ...props }, ref) => {
  return (
    <Combobox.Button ref={ref} {...props}>
      {children}
    </Combobox.Button>
  )
})

SelectButton.displayName = "SelectButton"

export default SelectButton
