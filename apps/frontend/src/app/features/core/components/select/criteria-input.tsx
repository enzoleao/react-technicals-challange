import { classNameBuilder } from '@/helpers/class-name-builder'
import { Combobox } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'
import { ChangeEvent, useRef, useState } from 'react'
import { useSelect } from '.'
import Show from '../show'
import Text from '../text'

export interface CriteriaInputProps<T = unknown> {
  className?: string
  onChange?: (criteria: string, event?: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  readonly?: boolean
  variant?: 'default' | 'danger'
}
export const CriteriaInput = <T,>(props: CriteriaInputProps<T>) => {
  const { value, pending } = useSelect()
  const hasValue = Object.values(value || {}).some(Boolean)

  const comboBtn = useRef<HTMLButtonElement>(null)
  const [expandedCombobox, setExpandedCombobox] = useState(false)
  return (
    <div className="flex flex-row relative w-full flex-1 shrink-0">
      <Combobox.Input
        className={classNameBuilder(
          'min-h-fit w-[353px] sm:w-[400px] h-10 rounded-full focus:placeholder-transparent placeholder-current  bg-transparent-15 py-2 px-3 pr-10 shadow-sm  focus:outline-none focus:ring-1  sm:text-sm',
          hasValue && 'caret-transparent',
          props.className,
        )}
        displayValue={() => ''}
        onChange={(event) => props.onChange?.(event.target.value, event)}
        placeholder={hasValue && !pending ? '' : props.placeholder}
        onFocus={() => {
          if (!expandedCombobox) {
            comboBtn.current?.click()
          }
        }}
        onBlur={() => setExpandedCombobox(false)}
      />
      <Show when={pending}>
        <div className="absolute flex inset-y-0 right-sm items-center justify-center"></div>
      </Show>
      <Show when={!pending && hasValue}>
        <div className="caret-transparent absolute flex inset-y-0 right-lg items-center justify-between w-full px-3">
          <Text variant="h1" className="capitalize font-bold">
            {String(value.name)}
          </Text>
          <Combobox.Button
            ref={comboBtn}
            onClick={() => setExpandedCombobox(true)}
          >
            <ChevronUpIcon
              className="h-3 w-5 text-gray-400/75 hover:text-gray-400 p-0"
              aria-hidden="true"
            />
            <ChevronDownIcon
              className="h-3 w-5 text-gray-400/75 hover:text-gray-400 p-0"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
      </Show>
      <Show when={!hasValue}>
        <Combobox.Button
          ref={comboBtn}
          className="absolute flex flex-col  inset-y-0 right-0 flex items-center rounded-r-md py-2 px-3 focus:outline-none"
          onClick={() => setExpandedCombobox(true)}
        >
          <ChevronUpIcon
            className="h-3 w-5 text-gray-400/75 hover:text-gray-400 p-0"
            aria-hidden="true"
          />
          <ChevronDownIcon
            className="h-3 w-5 text-gray-400/75 hover:text-gray-400 p-0"
            aria-hidden="true"
          />
        </Combobox.Button>
      </Show>
    </div>
  )
}

export default CriteriaInput
