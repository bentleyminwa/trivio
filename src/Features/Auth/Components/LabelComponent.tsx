import className from "classnames";

import { FC, ReactNode } from "react";

interface LabelProps {
  children: ReactNode;
  className?: string;
}

const Label: FC<LabelProps> = ({ children, ...rest }) => {
  const labelClasses = className(
    rest.className,
    "block mb-2 font-semibold text-gray-500"
  );

  return (
    <Label {...rest} className={labelClasses}>
      {children}
    </Label>
  );
};

export default Label;
