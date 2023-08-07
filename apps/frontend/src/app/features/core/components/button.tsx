import { classNameBuilder } from "@/helpers/class-name-builder";
import React from "react";

export type ButtonVariant = "filled" | "outlined" | "text";

export interface ButtonProps {
  children?: React.ReactNode;
  leftAttachment?: React.JSX.Element | React.FC;
  rightAttachment?: React.JSX.Element | React.FC;
  variant?: ButtonVariant;
  pending?: boolean;
  disabled?: boolean;
  type?: "submit" | "button";
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  grow?: boolean;
  className?: string;
  dataTestId: string;
}

const Button = ({
  children,
  leftAttachment,
  rightAttachment,
  variant = "filled",
  pending,
  disabled,
  type,
  onClick,
  grow,
  className,
  dataTestId,
}: ButtonProps) => {
  return (
    <button
      data-testid={dataTestId}
      tabIndex={pending || disabled ? -1 : undefined}
      type={type}
      disabled={disabled}
      onClick={(event) => {
        if (pending) return;
        onClick?.(event);
      }}
      className={classNameBuilder(
        "relative outline-none focus-visible:ring-4",
        "transition ease-dissolve duration-200",
        "disabled:cursor-not-allowed",
        leftAttachment ? "pl-4" : "",
        rightAttachment ? "pr-4" : "",
        grow ? "flex-1" : "",
        variantClassMap[variant],
        pending ? "cursor-progress" : "",
        className
      )}
    >
      {pending ? (
        <div className='flex flex-col absolute inset-0 items-center justify-center z-20'>
          <Spinner className='text-current w-6 h-6' />
        </div>
      ) : (
        <div className='flex flex-nowrap whitespace-nowrap gap-x-2 items-center justify-center text-h6m sm:text-h6 font-semibold'>
          {getAttachment(leftAttachment)}
          {children}
          {getAttachment(rightAttachment)}
        </div>
      )}
    </button>
  );
};

export default Button;

const variantClassMap: Record<ButtonVariant, string> = {
  filled: classNameBuilder(
    "h-10 px-6 bg-neutral-lightest text-neutral-darkest rounded-full",
    "hover:bg-opacity-0 hover:text-primary-darkest",
    "focus:bg-opacity-0 focus:text-primary-darkest",
    "active:bg-primary-light active:bg-opacity-100 active:text-primary-darkest",
    "before:absolute before:inset-0 before:-z-10 before:rounded-full",
    "before:bg-gradient-102deg before:from-primary-light before:to-primary-lightest"
  ),
  outlined: classNameBuilder(
    "h-10 px-6 border-2 border-neutral-lightest rounded-full text-neutral-lightest",
    "hover:bg-transparent-15",
    "focus:bg-transparent-15",
    "active:bg-transparent-25"
  ),
  text: classNameBuilder(
    "h-10 px-3 rounded-full text-neutral-lightest",
    "hover:bg-transparent-15",
    "focus:bg-transparent-15",
    "active:bg-transparent-7"
  ),
};

//By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL
function Spinner({ className }: { className: string }) {
  return (
    <svg
      viewBox='0 0 38 38'
      xmlns='http://www.w3.org/2000/svg'
      stroke='currentColor'
      className={className}
    >
      <g fill='none' fill-rule='evenodd'>
        <g transform='translate(1 1)' strokeWidth='2'>
          <circle stroke-opacity='.5' cx='18' cy='18' r='18' />
          <path d='M36 18c0-9.94-8.06-18-18-18'>
            <animateTransform
              attributeName='transform'
              type='rotate'
              from='0 18 18'
              to='360 18 18'
              dur='1s'
              repeatCount='indefinite'
            />
          </path>
        </g>
      </g>
    </svg>
  );
}

const getAttachment = (Component: React.JSX.Element | React.FC | undefined) => {
  if (!Component) return;
  if (React.isValidElement(Component)) return Component;
  if (typeof Component === "function") return <Component />;
};
