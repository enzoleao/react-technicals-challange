import { classNameBuilder } from "@/helpers/class-name-builder";
import React from "react";

export interface BaseRadioProps {
  id?: string;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  dataTestId: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
const BaseRadio: React.ForwardRefRenderFunction<
  HTMLInputElement,
  BaseRadioProps
> = (
  { checked = false, disabled, dataTestId, className, ...otherProps },
  ref
) => {
  return (
    <input
      {...otherProps}
      className={classNameBuilder(
        "relative w-[20px] h-[20px] appearance-none bg-gradient-102deg from-[#B6DCFB] from-10% to-[#E7F3FE] to-90% rounded-full",
        "disabled:bg-neutral-light disabled:bg-none",
        "after:absolute after:inset-[2px] after:rounded-full after:border-[3px] after:border-neutral-darkest after:bg-neutral-darkest",
        "after:bg-opacity-100 after:checked:bg-opacity-0",
        "transition duration-250 ease-dissolve before:transition before:duration-250 before:ease-dissolve",
        disabled
          ? "cursor-not-allowed"
          : "before:opacity-0 before:hover:opacity-100 before:absolute before:-inset-3 before:rounded-full before:bg-transparent-15 before:active:bg-transparent-25 cursor-pointer",
        className
      )}
      data-testid={dataTestId}
      type='radio'
      checked={checked}
      disabled={disabled}
      ref={ref}
    />
  );
};

export default React.forwardRef(BaseRadio);
