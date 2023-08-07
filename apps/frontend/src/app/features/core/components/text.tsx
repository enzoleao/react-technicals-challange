import { classNameBuilder } from "@/helpers/class-name-builder";
import React from "react";

export type Color =
  | "currentColor"
  | "white"
  | "neutral-medium"
  | "neutral-lightest"
  | "neutral-lighter"
  | "neutral-light"
  | "neutral-darkest"
  | "primary-darkest"
  | "primary-lightest"
  | "primary-light"
  | "primary-dark"
  | "neutral-darker"
  | "neutral-dark"
  | "accent-gradient";
export type TextTemplate = "category";
export type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p1"
  | "p2"
  | "p3";
export type TextAlign = "left" | "center" | "justify" | "right";

export interface TextProps {
  template?: TextTemplate;
  variant?: TextVariant;
  color?: Color;
  align?: TextAlign;
  truncate?: boolean;
  className?: string;
  children: string;
  onClick?: () => void;
}

const Text: React.FC<TextProps> = (props) => {
  const {
    className,
    color = "neutral-lightest",
    variant = "p1",
    align = "left",
    truncate,
    children,
    onClick,
  } = getPropsWithTemplate(props);
  const elementType =
    variant[0] === "h" && Number(variant[1]) <= 6 ? variant : "p";
  return React.createElement(
    elementType,
    {
      className: classNameBuilder(
        colorMap[color],
        variantMap[variant],
        alignMap[align],
        truncate ? "truncate" : "",
        className
      ),
      onClick,
    },
    children
  );
};

export default Text;

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

const variantMap: Partial<Record<TextVariant, string>> = {
  p1: "text-p1 font-normal",
  p2: "text-p2 font-normal",
  p3: "text-p3 font-normal",
};

const alignMap: Record<TextAlign, string> = {
  left: "text-left",
  center: "text-center",
  justify: "text-justify",
  right: "text-right",
};

const getPropsWithTemplate = (props: TextProps): TextProps => {
  if (!props.template) return props;
  const templatePropsMap: Record<TextTemplate, Partial<TextProps>> = {
    category: {
      variant: props.variant || "h6",
      color: props.color || "neutral-light",
      className: classNameBuilder(
        "w-fit cursor-pointer",
        "hover:text-primary-light active:text-primary-dark",
        "transition-all duration-200 ease-linear",
        props.className
      ),
    },
  };
  return { ...props, ...templatePropsMap[props.template] };
};
