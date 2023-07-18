import React, { useContext } from "react";
import { TabItemProps } from "./type";
import { TabContext } from "./tabs";
import classNames from "classnames";

const TabItems: React.FC<TabItemProps> = (props) => {
  const { label, index, disabled, className } = props;
  const context = useContext(TabContext);
  const classes = classNames("tabs-header-item", className, {
    "is-active": context.index === index,
    "is-disabled": disabled,
  });
  const handleClick = (e: React.MouseEvent) => {
    const key = (e.target as HTMLElement).dataset.index || "0";
    !disabled && context.onTabClick && context.onTabClick(key, e);
  };
  return (
    <li
      onClick={handleClick}
      className={classes}
      data-index={index}
      key={index}
    >
      {label}
    </li>
  );
};

export default TabItems;
