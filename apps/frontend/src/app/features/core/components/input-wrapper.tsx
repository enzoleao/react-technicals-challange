import { classNameBuilder } from '@/helpers/class-name-builder'
import React from 'react'
import Column from './column'
import Flex from './flex'
import Label, { LabelVariant } from './label'
import Show from './show'
import { Color } from './text'

export type InputWrapperDirection = 'column' | 'row'
type LabelConfig = {
  text: string
  color?: Color
  variant?: LabelVariant
}
export interface InputWrapperProps {
  label?: string | LabelConfig
  labelFor?: string
  error?: string
  required?: boolean
  children?: React.ReactNode
  className?: string
  direction?: InputWrapperDirection
}
export const InputWrapper: React.FC<InputWrapperProps> = ({
  label,
  ...props
}) => {
  const labelObject: LabelConfig =
    typeof label === 'object'
      ? label
      : typeof label === 'string'
      ? { text: label }
      : { text: '' }
  return (
    <Flex
      className={classNameBuilder(
        'gap-2',
        props.direction === 'row'
          ? 'flex-row items-center'
          : 'flex-col items-start',
        props.className,
      )}
    >
      <Show when={!!label}>
        <Label
          htmlFor={props.labelFor || ''}
          className={classNameBuilder(
            'after:ml-0.5 after:text-danger-300 after:content-["*"] text-gray-700',
            !props.required && 'after:hidden',
          )}
          variant={labelObject.variant || 'h5'}
          color={labelObject.color || 'neutral-lightest'}
        >
          {labelObject.text}
        </Label>
      </Show>
      <Column className="w-full">
        {props.children}
        <span className="h-0 mt-1 text-red-700 text-xs">
          {props.error ? '*' + props.error : null}
        </span>
      </Column>
    </Flex>
  )
}

export default InputWrapper
