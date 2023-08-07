import { classNameBuilder } from "@/helpers/class-name-builder";
import React from "react";

export interface BaseTextInputProps
  extends React.HTMLAttributes<HTMLInputElement> {
  testId: string;
  disabled?: boolean;
  error?: boolean;
}

const BaseTextInput: React.ForwardRefRenderFunction<
  HTMLInputElement,
  BaseTextInputProps
> = (
  { id, testId, disabled, onChange, error, className, ...inputProps },
  ref
) => (
  <input
    {...inputProps}
    id={id}
    type='text'
    data-testid={testId}
    disabled={disabled}
    className={classNameBuilder(
      commonClasses,
      !error && !disabled ? defaultClasses : "",
      !disabled && error ? errorClasses : "",
      disabled ? disabledClasses : "",
      className
    )}
    ref={ref}
  />
);

const commonClasses =
  "h-14 w-full rounded-lg pl-3 bg-transparent-15 text-neutral-lightest placeholder:text-transparent-50";
const defaultClasses =
  "placeholder:hover:text-neutral-lightest placeholder:focus:text-neutral-lightest placeholder:transition placeholder:ease-dissolve placeholder:duration-250";
const errorClasses = "border-2 border-red-800/25";
const disabledClasses = "cursor-not-allowed";

export default React.forwardRef(BaseTextInput);
