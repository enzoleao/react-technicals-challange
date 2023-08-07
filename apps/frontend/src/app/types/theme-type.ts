export type Intent =
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "danger"
  | "warning"
  | "info"

export const intents: Intent[] = [
  "primary",
  "secondary",
  "accent",
  "success",
  "danger",
  "warning",
  "info"
]

export type Size = "none" | "xs" | "sm" | "md" | "lg" | "xl"

export type TextSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl"

export type Placement =
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "right"
  | "right-start"
  | "right-end"
  | "left"
  | "left-start"
  | "left-end"

export interface FormElement<T> {
  id?: string
  testId?: string
  label?: string
  required?: boolean
  disabled?: boolean
  error?: string
  placeholder?: string
  autofocus?: boolean
  grow?: boolean

  value?: T
  onChange?: (value: T, event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement, Element>) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement, Element>) => void
}
