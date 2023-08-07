import { classNameBuilder } from "@/helpers/class-name-builder";
import { Combobox, Transition } from "@headlessui/react";
import React from "react";

export interface OptionPanelProps {
  className?: string;
  nonIdealState?: string | React.ReactElement;
  children: React.ReactElement[];
  onOpen?: () => void;
  onClose?: () => void;
}
export const OptionPanel = (
  props: React.PropsWithChildren<OptionPanelProps>
) => {
  if (!props.children?.length) return null;
  return (
    <Transition
      as={React.Fragment}
      leave='transition ease-in duration-100'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
      beforeEnter={props.onOpen}
      afterLeave={props.onClose}
    >
      <Combobox.Options
        className={classNameBuilder(
          "absolute z-10 mt-[42px] max-h-60 w-full overflow-auto rounded-lg bg-neutral-dark py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
          props.className
        )}
      >
        {props.children?.length === 0 ? (
          <>
            {typeof props.nonIdealState === "string" ? (
              <div className='relative cursor-default select-none py-2 px-4 text-gray-700'>
                {props.nonIdealState}
              </div>
            ) : (
              props.nonIdealState
            )}
          </>
        ) : (
          <>{props.children}</>
        )}
      </Combobox.Options>
    </Transition>
  );
};

export default OptionPanel;
