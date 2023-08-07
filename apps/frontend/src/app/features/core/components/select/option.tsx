import { classNameBuilder } from "@/helpers/class-name-builder";
import { Combobox } from "@headlessui/react";
import React from "react";

export type OptionRenderProps<T = unknown> = {
  active: boolean;
  disabled: boolean;
  selected: boolean;
  value: T;
};

export interface OptionProps<T = unknown> {
  value: T;
  disabled?: boolean;
}
export const Option = <T,>(props: React.PropsWithChildren<OptionProps<T>>) => {
  return (
    <Combobox.Option value={props.value} disabled={props.disabled}>
      {({ active, disabled, selected }) => (
        <div
          className={classNameBuilder(
            "relative flex cursor-default  select-none py-2 pl-3 pr-9 hover:bg-transparent-15",
            disabled ? "" : active ? "" : "",
            disabled && "cursor-not-allowed"
          )}
        >
          <span
            className={classNameBuilder(
              "mr-1 pl-md block truncate",
              selected
                ? "text-h6 text-neutral-lightest"
                : "text-p1 font-normal text-neutral-light"
            )}
          >
            {props.children}
          </span>
        </div>
      )}
    </Combobox.Option>
  );
};

export default Option;
