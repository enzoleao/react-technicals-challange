import CheckIcon from "@/assets/icons/checkbox-check.svg";
import { classNameBuilder } from "@/helpers/class-name-builder";
import React from "react";

export interface BaseCheckboxProps {
  id?: string;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  dataTestId: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
const BaseCheckbox: React.ForwardRefRenderFunction<
  HTMLInputElement,
  BaseCheckboxProps
> = (
  { checked = false, disabled, dataTestId, className, ...otherProps },
  ref
) => {
  return (
    <div
      className={classNameBuilder(
        "relative group/checkbox w-[18px] h-[18px]",
        className
      )}
    >
      <input
        {...otherProps}
        className={classNameBuilder(
          "relative appearance-none bg-gradient-102deg from-[#B6DCFB] from-10% to-[#E7F3FE] to-90% rounded-sm w-full h-full peer/checkbox",
          "disabled:bg-neutral-light disabled:bg-none",
          "after:opacity-100 after:checked:opacity-0 after:absolute after:inset-[2px] after:bg-neutral-darkest",
          "transition duration-250 ease-dissolve before:transition before:duration-250 before:ease-dissolve",
          disabled
            ? "cursor-not-allowed"
            : "before:opacity-0 before:group-hover/checkbox:opacity-100 before:absolute before:-inset-3 before:rounded-full before:bg-transparent-15 before:active:bg-transparent-15 cursor-pointer"
        )}
        data-testid={dataTestId}
        type='checkbox'
        checked={checked}
        disabled={disabled}
        ref={ref}
      />
      <CheckIcon
        className={classNameBuilder(
          "absolute -inset-[3px] text-neutral-darkest hidden pointer-events-none",
          "peer-checked/checkbox:block",
          "transition duration-250 ease-dissolve",
          disabled ? "" : "group-hover/checkbox:text-[#381E72]"
        )}
      />
    </div>
  );
};

export default React.forwardRef(BaseCheckbox);
