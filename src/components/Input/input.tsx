import React from "react";
import { InputProps } from "./type";
import classNames from "classnames";
import Icon from "../Icon/icon";
export const Input: React.FC<InputProps> = (props: InputProps) => {
  const {
    size = "middle",
    disabled,
    append,
    prepand,
    className,
    style,
    icon,
    placeholder = "请输入",
    onClickIcon,
    ...restProps
  } = props;
  const classes = classNames("viking-input-wrapper", className, {
    [`input-size-${size}`]: size,
    "is-disabled": disabled,
    "input-group": prepand || append,
    "input-group-append": !!append,
    "inpt-group-prepend": !!prepand,
  });

  const fixControlValue = (value: any) => {
    if (typeof value === "undefined" || value === null) {
      return "";
    }
    return value;
  };

  const handleClickIcon = () => {
    onClickIcon && onClickIcon();
  };

  if ("value" in props) {
    delete restProps.defaultValue;
    restProps.value = fixControlValue(props.value);
  }
  return (
    <div className={classes} style={style}>
      {prepand && <div className="viking-input-group-prepend">{prepand}</div>}
      {icon && (
        <div className="icon-wrapper">
          <Icon onClick={handleClickIcon} icon={icon} title={`title-${icon}`} />
        </div>
      )}
      <input
        className="viking-input-inner"
        autoComplete="off"
        disabled={disabled}
        placeholder={placeholder}
        role="combobox"
        aria-controls="rc_select_8_list"
        aria-expanded={false}
        {...restProps}
      />
      {append && <div className="viking-input-group-append">{append}</div>}
    </div>
  );
};

Input.defaultProps = {
  size: "middle",
  placeholder: "请输入",
};
export default Input;
