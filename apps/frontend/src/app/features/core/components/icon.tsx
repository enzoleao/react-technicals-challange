import { classNameBuilder } from "@/helpers/class-name-builder";
import React from "react";

export interface IconProps {
  svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  className?: string;
}

const Icon: React.FC<IconProps> = (props) => {
  const { svg: MyIcon, className } = props;

  return <MyIcon className={classNameBuilder("flex shrink-0", className)} />;
};

export default Icon;
