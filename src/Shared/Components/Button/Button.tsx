import className from "classnames";

import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  const btnClasses = className(
    rest.className,
    "border border-accent rounded-full bg-accent text-bg font-bold px-5 py-3 tracking-wide"
  );

  return (
    <button {...rest} className={btnClasses}>
      {children}
    </button>
  );
};

export default Button;
