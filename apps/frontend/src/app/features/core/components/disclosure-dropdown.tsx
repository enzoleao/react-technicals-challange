import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { classNameBuilder } from '@/helpers/class-name-builder'
import { Disclosure, Transition } from '@headlessui/react'
import React from 'react'
import Text from './text'
import Divider from './divider'

export interface DropdownProps {
  title?: string
  children?: React.ReactNode
  className?: string
}
const DisclosureDropdown: React.FC<DropdownProps> = ({
  title = '',
  children,
  className,
}) => {
  return (
    <Disclosure
      defaultOpen
      as="div"
      className={classNameBuilder(
        'flex flex-col  overflow-hidden max-h-none',
        className,
      )}
    >
      {({ open }) => (
        <>
          <Disclosure.Button
            className={classNameBuilder(
              'z-10 flex flex-row justify-between items-center ',
              'hover:bg-neutral-dark ',
              open ? 'bg-neutral-dark' : 'bg-neutral-darker',
              'transition ease-dissolve duration-509',
            )}
          >
            <Text variant="h4" className="text-[#585858] font-bold ">
              {title}
            </Text>
            <ChevronUpIcon
              height={16}
              width={16}
              className={classNameBuilder(
                'text-neutral-lightest transition ease-dissolve duration-250',
                open ? 'rotate-180' : '',
              )}
            />
          </Disclosure.Button>
          <Divider />
          <Transition
            enter="transition ease-dissolve duration-250 transform"
            enterFrom="-translate-y-5"
            enterTo="translate-x-0"
            leave="transition ease-dissolve duration-250 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-y-5"
          >
            <Disclosure.Panel className="h-auto flex flex-col bg-neutral-darker/50 mt-[16px] gap-y-[12px]">
              {children}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}

export default DisclosureDropdown
