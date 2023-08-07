import { classNameBuilder } from "@/helpers/class-name-builder";
import React from "react";
import Text from "./text";

export interface TagCardProps {
  children: string;
  className?: string;
}
const TagCard: React.FC<TagCardProps> = ({ className, ...props }) => {
  return (
    <Text
      className={classNameBuilder(
        "bg-transparent-7 rounded-full px-3 py-2",
        className
      )}
      variant='h6'
      color='neutral-lightest'
      align='center'
      {...props}
    />
  );
};

export default TagCard;
