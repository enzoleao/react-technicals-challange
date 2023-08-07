import { classNameBuilder } from "@/helpers/class-name-builder";
import { uniqueId } from "lodash";
import React from "react";
import BaseCheckbox, { BaseCheckboxProps } from "./base-checkbox";
import Label, { LabelVariant } from "./label";
import Row from "./row";
import Show from "./show";
import { Color } from "./text";

export type LabelConfig = {
  text: string;
  color?: Color;
  variant?: LabelVariant;
};
export interface CheckboxProps extends BaseCheckboxProps {
  label?: string | LabelConfig;
}
const Checkbox: React.ForwardRefRenderFunction<
  HTMLInputElement,
  CheckboxProps
> = ({ id = uniqueId("checkbox-"), className, label, ...otherProps }, ref) => {
  const labelConfig: LabelConfig | undefined =
    typeof label === "string" ? { text: label } : label;
  return (
    <Row className={classNameBuilder("items-center gap-x-5", className)}>
      <BaseCheckbox id={id} {...otherProps} ref={ref} />
      <Show when={!!labelConfig}>
        <Label
          htmlFor={id}
          color={labelConfig?.color}
          variant={labelConfig?.variant}
        >
          {labelConfig?.text || ""}
        </Label>
      </Show>
    </Row>
  );
};

export default React.forwardRef(Checkbox);
