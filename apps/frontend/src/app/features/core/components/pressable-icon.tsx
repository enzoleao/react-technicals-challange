import { classNameBuilder } from "@/helpers/class-name-builder";
import Image from "next/image";
import React from "react";
import Link from "./link";

export interface PressableIconProps {
  testId?: string;
  children: string | JSX.Element;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}
const PressableIcon: React.FC<PressableIconProps> = ({
  testId,
  children,
  href: hrefProp,
  disabled,
  className,
  onClick,
}) => {
  const isImageUrl = typeof children === "string";
  const isJSXElement = React.isValidElement(children);
  if (!isImageUrl && !isJSXElement) return null;
  const href = disabled ? undefined : hrefProp;
  const IconWrapper = href ? Link : React.Fragment;
  const IconBody = href ? "div" : "button";
  return (
    <IconWrapper href={href} data-testid={testId}>
      <IconBody
        data-testid={testId}
        className={classNameBuilder(
          "relative rounded-sm overflow-hidden",
          disabled
            ? ""
            : "hover:scale-105 active:scale-90 transition duration-250 ease-dissolve",
          className ?? "w-6 h-6"
        )}
        onClick={disabled ? () => null : onClick}
      >
        {isImageUrl ? <Image src={children} alt='' fill /> : children}
      </IconBody>
    </IconWrapper>
  );
};

export default PressableIcon;
