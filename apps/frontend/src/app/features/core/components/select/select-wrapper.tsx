import { Intent } from "@/types/theme-type";
import { Combobox } from "@headlessui/react";
import React from "react";
import Column from "../column";
import { SelectContext, SelectContextType } from "./select-context";

export interface SelectWrapperProps<T> {
  className?: string;
  value?: T;
  onChange?: (value: T) => void;
  pending?: boolean;
  disabled?: boolean;
  intent?: Intent;
  children?: React.ReactNode;
}
export const SelectWrapper = <T,>(props: {
  [key in keyof SelectWrapperProps<T>]: SelectWrapperProps<T>[key];
}) => {
  const context: SelectContextType<any> = {
    value: props.value,
    onChange: props.onChange,
    pending: props.pending,
    disabled: props.disabled,
  };
  return (
    <SelectContext.Provider value={context}>
      <Combobox
        as='div'
        className={props.className}
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
      >
        <Column className='relative max-h-10 h-10 flex-1 items-start'>
          {props.children}
        </Column>
      </Combobox>
    </SelectContext.Provider>
  );
};

export default SelectWrapper;
