import { classNameBuilder } from "@/helpers/class-name-builder";
import React from "react";

export interface ColumnProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Column: React.FC<ColumnProps> = React.forwardRef<
  HTMLInputElement,
  ColumnProps
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={classNameBuilder("flex flex-col", className)}
      {...props}
    >
      {children}
    </div>
  );
});

Column.displayName = "Column";

export default Column;
