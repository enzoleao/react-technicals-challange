import { classNameBuilder } from "@/helpers/class-name-builder";
import React from "react";

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Row: React.FC<RowProps> = React.forwardRef<
  HTMLDivElement,
  RowProps
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={classNameBuilder("flex flex-row", className)}
      {...props}
    >
      {children}
    </div>
  );
});

Row.displayName = "Row";

export default Row;
