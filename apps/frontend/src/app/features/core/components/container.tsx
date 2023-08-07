import { classNameBuilder } from "@/helpers/class-name-builder";
import React from "react";

export interface ContainerProps {
  as?: "div" | "header" | "footer" | "section";
  className?: string;
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({
  as = "div",
  className,
  children,
}) => {
  const DynamicTag = `${as}` as keyof JSX.IntrinsicElements;
  return (
    <DynamicTag
      className={classNameBuilder(
        "container mx-auto px-sm sm:px-md md:px-lg lg:px-xl",
        className
      )}
    >
      {children}
    </DynamicTag>
  );
};

export default Container;
