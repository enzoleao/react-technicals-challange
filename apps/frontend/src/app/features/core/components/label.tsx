import { classNameBuilder } from "@/helpers/class-name-builder";
import React from "react";
import { Color } from "./text";

export type LabelVariant = "h5" | "h6" | "p1" | "p2" | "p3";

export interface LabelProps {
  htmlFor: string;
  variant?: LabelVariant;
  color?: Color;
  className?: string;
  children: string;
}

const Label: React.FC<LabelProps> = ({
  className,
  color = "neutral-lightest",
  variant = "h6",
  ...otherProps
}) => {
  return (
    <label
      className={classNameBuilder(
        colorMap[color],
        variantMap[variant],
        className
      )}
      {...otherProps}
    />
  );
};

export default Label;

const colorMap: Record<Color, string> = {
  currentColor: "text-current",
  white: "text-white",
  "primary-lightest": "text-primary-lightest",
  "primary-light": "text-primary-light",
  "primary-dark": "text-primary-dark",
  "primary-darkest": "text-primary-darkest",
  "neutral-lightest": "text-neutral-lightest",
  "neutral-lighter": "text-neutral-lighter",
  "neutral-light": "text-neutral-light",
  "neutral-medium": "text-neutral-medium",
  "neutral-dark": "text-neutral-dark",
  "neutral-darker": "text-neutral-darker",
  "neutral-darkest": "text-neutral-darkest",
  "accent-gradient":
    "bg-gradient-102deg from-[#B6DCFB] from-10% to-[#E7F3FE] to-90% bg-clip-text text-transparent",
};

const variantMap: Record<LabelVariant, string> = {
  h5: "text-h5m sm:text-h5 font-bold",
  h6: "text-h6m sm:text-h6 font-semibold",
  p1: "text-p1 font-normal",
  p2: "text-p2 font-normal",
  p3: "text-p3 font-normal",
};
