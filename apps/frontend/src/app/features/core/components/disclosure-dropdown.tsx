import ChevronDownIcon from "@/assets/icons/chevron-down.svg";
import { classNameBuilder } from "@/helpers/class-name-builder";
import { Disclosure, Transition } from "@headlessui/react";
import React from "react";
import Text from "./text";

export interface DropdownProps {
  title?: string;
  children?: string;
  className?: string;
}
const DisclosureDropdown: React.FC<DropdownProps> = ({
  title = "",
  children = "",
  className,
}) => {
  return (
    <Disclosure
      as='div'
      className={classNameBuilder(
        "flex flex-col rounded-lg overflow-hidden",
        className
      )}
    >
      {({ open }) => (
        <>
          <Disclosure.Button
            className={classNameBuilder(
              "z-10 flex flex-row justify-between items-center p-4 rounded-b-lg",
              "hover:bg-neutral-dark active:bg-[rgb(53,51,58)]",
              open ? "bg-neutral-dark" : "bg-neutral-darker",
              "transition ease-dissolve duration-250"
            )}
          >
            <Text variant='h4' color='neutral-lightest'>
              {title}
            </Text>
            <ChevronDownIcon
              className={classNameBuilder(
                "text-neutral-lightest transition ease-dissolve duration-250",
                open ? "rotate-180" : ""
              )}
            />
          </Disclosure.Button>
          <Transition
            enter='transition ease-dissolve duration-250 transform'
            enterFrom='-translate-y-full'
            enterTo='translate-x-0'
            leave='transition ease-dissolve duration-250 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-y-full'
          >
            <Disclosure.Panel className='p-4 -mt-2 pt-6 bg-neutral-darker/50 rounded-b-lg'>
              <Text variant='p1' color='neutral-lightest'>
                {children}
              </Text>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default DisclosureDropdown;
