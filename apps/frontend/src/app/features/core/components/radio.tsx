import { classNameBuilder } from "@/helpers/class-name-builder";
import { uniqueId } from "lodash";
import React from "react";
import BaseRadio, { BaseRadioProps } from "./base-radio";
import { LabelConfig } from "./checkbox";
import Label from "./label";
import Row from "./row";
import Show from "./show";

export interface RadioProps extends BaseRadioProps {
  label?: string | LabelConfig;
}
const Radio: React.ForwardRefRenderFunction<HTMLInputElement, RadioProps> = (
  { id = uniqueId("checkbox-"), className, label, ...otherProps },
  ref
) => {
  const labelConfig: LabelConfig | undefined =
    typeof label === "string" ? { text: label } : label;
  return (
    <Row className={classNameBuilder("items-center gap-x-2", className)}>
      <BaseRadio id={id} {...otherProps} />
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

export default React.forwardRef(Radio);
