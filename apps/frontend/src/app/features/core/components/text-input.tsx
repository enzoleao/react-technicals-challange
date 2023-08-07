import React from "react"
import InputWrapper, { InputWrapperProps } from "./input-wrapper"
import BaseTextInput, { BaseTextInputProps } from "./base-text-input"
import { uniqueId } from "lodash"

export interface TextInputProps extends Omit<BaseTextInputProps, "error"> {
  label?: InputWrapperProps["label"]
  error?: string
}
const TextInput: React.ForwardRefRenderFunction<
  HTMLInputElement,
  TextInputProps
> = ({ id = uniqueId("input-"), label, error, className, ...props }, ref) => {
  return (
    <InputWrapper
      className={className}
      labelFor={id}
      label={label}
      error={error}
    >
      <BaseTextInput id={id} error={!!error} {...props} ref={ref} />
    </InputWrapper>
  )
}

export default React.forwardRef(TextInput)
