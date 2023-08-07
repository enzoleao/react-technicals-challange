import { ButtonProps } from "./button";

interface IconButtonProps extends Omit<ButtonProps, "grow" | "label"> {}

function IconButton({
  // icon,
  // intent = "secondary",
  variant = "filled",
  pending,
  disabled,
  // size = "md",
  type,
  // shape = "rounded",
  onClick,
}: IconButtonProps) {
  return (
    <button
      tabIndex={pending || disabled ? -1 : undefined}
      type={type}
      disabled={disabled}
      onClick={(event) => {
        if (pending) {
          return;
        }
        onClick?.(event);
      }}
      className={[
        "relative transition outline-none focus-visible:ring-4",
        // sizeClassMap[size],
        // shapeClassMap[shape],
        // variantClassMap[variant][intent] || "",
        // !pending && !disabled ? enabledVariantClassMap[variant][intent] : "",
        pending ? pendingClasses : "",
        disabled ? disabledClasses : "",
        // disabled ? variantDisabledClassMap[variant][intent] || "" : "",
      ].join(" ")}
    >
      {pending && (
        <div className='flex flex-col absolute inset-0 items-center justify-center'>
          {/* <Spinner
            className={["text-current", spinnerSizeMap[size]].join(" ")}
          /> */}
        </div>
      )}
      <div
        className={`flex flex-row items-center justify-center gap-xs ${
          pending ? "invisible" : ""
        }`}
      >
        {/* {icon} */}
      </div>
    </button>
  );
}

export default IconButton;

const pendingClasses = "cursor-progress";
const disabledClasses =
  "disabled:text-opacity-50 disabled:border-dashed disabled:shadow-none disabled:cursor-not-allowed";
