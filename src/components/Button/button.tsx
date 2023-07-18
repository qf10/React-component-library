import React from "react";
import classNames from "classnames";
import { ButtonProps, EnumButtonType } from "./type";
export const Button: React.FC<ButtonProps> = ({
  btnType,
  size,
  className,
  disabled,
  href,
  children,
  ...restProps
}: ButtonProps) => {
  const classes = classNames("btn", className, {
    [`btn-${size}`]: size,
    [`btn-${btnType}`]: btnType,
    disabled: btnType === EnumButtonType.LIKN && disabled,
  });
  if (btnType === EnumButtonType.LIKN && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: "default",
  size: "middle",
};

export default Button;
