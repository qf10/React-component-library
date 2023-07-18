import React, { useContext } from "react";
import { MenuItemProps } from "./type";
import classNames from "classnames";
import { MenuContext } from "./menu";
const MenuItem: React.FC<MenuItemProps> = (props) => {
  const context = useContext(MenuContext);
  const { index, style, className, disabled, children } = props;
  const classes = classNames("menu-item", className, {
    "is-disabled": disabled,
    "is-active": context.index === index,
  });
  const handleClick = () => {
    context.onSelect &&
      !disabled &&
      typeof index === "string" &&
      context.onSelect(index);
  };
  return (
    <li
      className={classes}
      style={style}
      data-testid="test-item"
      onClick={() => handleClick()}
    >
      {children}
    </li>
  );
};
MenuItem.displayName = "MenuItem";
export default MenuItem;
